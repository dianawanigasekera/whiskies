import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';

import WhiskyGrid from './components/WhiskyGrid';
import {fetchWhiskies} from "./actions/action";

class App extends Component {
  render() {
    const {
      fetchWhiskies,
      isLoading,
      error,
      whiskies
    } = this.props;

    return (
      <div className="App">
        <button onClick={fetchWhiskies}>Fetch whiskies</button>
        {isLoading && <h1>Fetching data</h1>}
        {!isLoading && !error && <WhiskyGrid whiskies={whiskies} />}
        {error && <h1>{error}</h1>}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        fetchWhiskies
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);