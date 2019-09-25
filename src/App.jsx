import React, { Component } from 'react';
import './App.css';
import PostContainer from "./components/Posts";


class App extends Component {
    render() {
        return (
            <div className="App">
                <PostContainer>
                </PostContainer>
            </div>
        );
    }
}
export default App;
