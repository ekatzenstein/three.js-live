import React, {Component} from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';




import ExampleSearch from './components/ExampleSearch';
import ExampleDrawer from './components/ExampleDrawer';
import CodeDrawer from './components/CodeDrawer';
import Header from './components/Header';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';



const fixed_left=.25;
const headerHeight=80;
class App extends Component {
    componentWillReceiveProps(nextProps) {
        var routeChanged = nextProps.location.pathname !== this.props.location.pathname;
        if (routeChanged) {
            this._setCode(`three.js/examples/${nextProps.location.pathname}.html`);
        }

    }
    getChildContext() {
      const mainTheme = getMuiTheme(baseTheme);
      mainTheme.slider.selectionColor='#2194CE'
       return { muiTheme: mainTheme };
   }

   _sidebarToggle(){
      const left = this.state.sb ? 0 : fixed_left;
      this.setState({sb:!this.state.sb, left})
   }
   _codeToggle(){
      this.setState({cb:!this.state.cb})
   }
   _cbTransparency(event,value){
      this.setState({codeBlockTransparency:value})
   }
    _getFiles() {
        const _this = this;
        axios.get('three.js/examples/files.js').then(function(response) {
            let str = response.data;
            str = str.substring(str.indexOf('{'))
            str = str.substring(0, str.indexOf(';'))
            _this.setState({exampleFiles: JSON.parse(str)})
        }).catch(function(error) {
            console.log(error);
        });
    }

    _searchHandler(e) {
        this.setState({search: e.target.value})
    }

    constructor() {
        super();
        this.state = {
            code: 'no code loaded',
            exampleFiles: {},
            search: '',
            updateScene: false,
            sb:true,
            cb:true,
            headerHeight:headerHeight,
            left:fixed_left,
            top:headerHeight/window.innerHeight,
            codeBlockTransparency:.75
        }

        this._updateCode = this._updateCode.bind(this);
        this._updateCanvas = this._updateCanvas.bind(this);
        this._getFiles = this._getFiles.bind(this);
        this._searchHandler = this._searchHandler.bind(this);
        this._sidebarToggle = this._sidebarToggle.bind(this);
        this._codeToggle = this._codeToggle.bind(this);
        this._cbTransparency = this._cbTransparency.bind(this);
        this._getFiles();
    }
    _updateCode(newCode) {
        this.setState({code: newCode, updateScene: true});
    }
    _updateCanvas() {
        var previewFrame = document.getElementById('preview');
        var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
        preview.open();
        preview.write(this.state.code);
        preview.close();
    }
    componentDidUpdate() {

        if (this.state.updateScene) {
            // console.log(this.props.location.pathname)

            this._updateCanvas();
            this.setState({updateScene: false})
        }
    }

    _setCode(url_path) {
        const _this = this;
        axios.get(url_path).then(function(response) {
            _this.setState({
                code: response.data.replace('<head>', `<head>
        <base href="./three.js/examples/" target="_blank">`),
                updateScene: true
            });
            _this._updateCanvas();
        }).catch(function(error) {
            console.log(error);
        });
    }
    componentDidMount() {}

    render() {

        return (
            <div className="App">
               <div style={{zIndex:2}}>
               <iframe id="preview" width="100%" height='100% 'style={{
                   position: 'absolute',
                   zIndex:0
               }}></iframe>
               </div>
            <Header

               transparency={this.state.codeBlockTransparency}

               cbToggle = {this._codeToggle}

               sbToggle = {this._sidebarToggle}
               sb={this.state.sb}
               cb={this.state.cb}
               height = {this.state.headerHeight}/>




             <ExampleDrawer
               files={this.state.exampleFiles}
               searchVal={this.state.search}
               search={this._searchHandler}
               sidebar = {this.state.sb}
               left={this.state.left}
               leftMin={this.state.leftMin}
               hh = {this.state.headerHeight}
             />
          <CodeDrawer
             transparency={this.state.codeBlockTransparency}
             cbTransparency={this._cbTransparency}
              files={this.state.exampleFiles}
              searchVal={this.state.search}
              search={this._searchHandler}
              sidebar = {this.state.cb}
              left={this.state.left}
              leftMin={this.state.leftMin}
              hh = {this.state.headerHeight}
              top={this.state.top}

              value={this.state.code}
              updateCode={this._updateCode}
              interact={this.interact}

            />
          {

         }
         </div>
        );
    }
}

App.childContextTypes = {
            muiTheme: React.PropTypes.object.isRequired,
        };

export default App;
