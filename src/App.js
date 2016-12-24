import React, {Component} from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import Codemirror from 'react-codemirror';

require('codemirror/lib/codemirror.css'); //css install for code editor
require('codemirror/mode/htmlmixed/htmlmixed');


import ExampleSearch from './components/ExampleSearch';
import Drawer from './components/Drawer';
import Header from './components/Header';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


class App extends Component {
    componentWillReceiveProps(nextProps) {
        var routeChanged = nextProps.location.pathname !== this.props.location.pathname;
        if (routeChanged) {
            this._setCode(`three.js/examples/${nextProps.location.pathname}.html`);
        }

    }
    getChildContext() {
       return { muiTheme: getMuiTheme(baseTheme) };
   }

   _sidebarToggle(){
      this.setState({sidebar:!this.state.sidebar})
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
            readOnly: false,
            mode: 'htmlmixed',
            exampleFiles: {},
            search: '',
            updateScene: false,
            sidebar:true
        }

        this._updateCode = this._updateCode.bind(this);
        this._updateCanvas = this._updateCanvas.bind(this);
        this._getFiles = this._getFiles.bind(this);
        this._searchHandler = this._searchHandler.bind(this);
        this._sidebarToggle = this._sidebarToggle.bind(this);
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
            console.log(this.props.location.pathname)

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
        var options = {
            lineNumbers: true,
            readOnly: this.state.readOnly,
            mode: this.state.mode
        };
        return (
            <div className="App">
               <Header sbToggle = {this._sidebarToggle} sb={this.state.sidebar}/>
                <iframe id="preview" width="80%" style={{
                    position: 'absolute'
                }}></iframe>

             <Drawer files={this.state.exampleFiles} searchVal={this.state.search} search={this._searchHandler} sidebar = {this.state.sidebar}/>
                <Codemirror ref="editor" value={this.state.code} onChange={this._updateCode} options={options} interact={this.interact} height="10px"/>
            </div>
        );
    }
}

App.childContextTypes = {
            muiTheme: React.PropTypes.object.isRequired,
        };

export default App;
