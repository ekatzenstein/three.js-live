//third party libraries
import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

//styles
import '../App.css';

//custom components and containers
import ExampleDrawer from './ExampleDrawer';
import CodeDrawer from './CodeDrawer';
import Header from '../components/Header';
import IFrame from '../components/IFrame';

//material-ui requirements
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//constants
const headerHeight = 80;
const top = headerHeight / window.innerHeight;

class App extends Component {
    constructor() {
        super();
        this._updateCode = this._updateCode.bind(this);
        this._refreshCode = this._refreshCode.bind(this);
        this._updateCanvas = this._updateCanvas.bind(this);
        this._getFiles = this._getFiles.bind(this);
        this._getFiles();
    }
    componentWillReceiveProps(nextProps) {
        var routeChanged = nextProps.location.pathname !== this.props.location.pathname;
        if (routeChanged) {
            this._setCode(`three.js/examples/${nextProps.location.pathname}.html`);
        }
    }

    componentDidUpdate() {
        if (this.props.reloadFrame) {
            if(this.props.iFrameRender){
                this.props.actions.iFrameDestroy();
            }
            else if(!document.getElementById('preview')){
                this.props.actions.iFrameReset();
                this.props.actions.disableIframeUpdate();
            }
        }
        else if (this.props.updateScene){
            this._updateCanvas();
            this.props.actions.pauseIframeUpdate();
        }
    }

    componentDidMount() {

        const _this = this;
        window.addEventListener('resize', () => {
            _this.props.actions.disableAnimate();
            _this.forceUpdate();
        });
    }

    getChildContext() { //required for material-ui
        const mainTheme = getMuiTheme(baseTheme);
        mainTheme.slider.selectionColor = '#2194CE'
        return {muiTheme: mainTheme};
    }

    _getFiles() {
        const _this = this;
        axios.get('three.js/examples/files.js').then(function(response) {
            let str = response.data;
            str = str.substring(str.indexOf('{'))
            str = str.substring(0, str.indexOf(';'))
            _this.props.actions.loadExamples(JSON.parse(str))
            _this._setCode(`three.js/examples/${_this.props.location.pathname}.html`);
        }).catch(function(error) {
            console.log(error);
        });
    }

    _updateCode(newCode) {
        this.props.actions.updateCode(newCode)
    }
    _refreshCode() {
        this.props.actions.enableIframeUpdate();
    }

    _updateCanvas() {
        var previewFrame = document.getElementById('preview');
        var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
        preview.open();
        preview.write(this.props.code);
        preview.close();
    }

    _setCode(url_path) {
      console.log(url_path)
        url_path = url_path === 'three.js/examples//.html' ? 'home.html' : url_path;
        const _this = this;
        axios.get(url_path).then(function(response) {
            let newcode = response.data.replace('<head>', `<head><base href="./three.js/examples/" target="_blank">`);
            _this.props.actions.updateCode(newcode,_this.props.location.pathname)
        }).catch(function(error) {
            console.log(error);
        });
    }
    _cleanup(){
        this.props.actions.iFrameDestroy();

        // console.log(document.getElementById('preview').children, document.getElementById('preview'))

    }

    render(props) {
        return (
            <div className="App">
                <div id='iContainer' style={{
                    zIndex: 2
                }}>
                    {this.props.iFrameRender? <IFrame id='comp' animateCode={this.props.animateCode} left={this.props.left} headerHeight={headerHeight}/>
                :null}
            </div>
                <Header
                    transparency={this.props.codeBlockTransparency}
                    cbToggle={this.props.actions.cbToggle}
                    sbToggle={this.props.actions.sbToggle}
                    sb={this.props.sb}
                    cb={this.props.cb}
                    height={headerHeight}
                />

                <ExampleDrawer
                    files={this.props.exampleFiles}
                    searchVal={this.props.search}
                    search={this.props.actions.search}
                    open={this.props.sb}
                    left={this.props.left}
                    hh={headerHeight}
                    animate={this.props.animateCode}
                />

                <CodeDrawer
                    animate={this.props.animateCode}
                    transparency={this.props.codeBlockTransparency}
                    cbTransparency={this.props.actions.codeBlockTransparency}
                    open={this.props.cb}
                    left={this.props.left}
                    pathname={this.props.example}
                    value={this.props.code}
                    updateCode={this._updateCode}
                    refresh={this._refreshCode}
                    top={top}
                />
            </div>
        );
    }
}

App.childContextTypes = { //required for material-ui
    muiTheme: React.PropTypes.object.isRequired
};


function mapStateToProps(state){
  return{
    sb:state.display.sb,
    animateCode:state.display.animateCode,
    cb:state.display.cb,
    left: state.display.left,
    codeBlockTransparency:state.code.codeBlockTransparency,
    search:state.search.searchQuery,
    code:state.code.code,
    updateScene:state.code.updateScene,
    reloadFrame:state.code.reloadFrame,
    example:state.code.example,
    exampleFiles:state.load.exampleFiles,
    iFrameRender:state.iframe.render
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(Actions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
