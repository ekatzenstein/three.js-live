import React from 'react';
import GifsTemp from '../components/GifsTemp';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import SearchBar from '../components/GifSearchBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar onTermChange={this.props.actions.requestGifs} />
        <GifsTemp gifs={ this.props.gifs } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    gifs: state.gifs
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
