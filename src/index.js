import React, { Component } from 'react';
import Routes from './routes';
import "./config/StatusBarConfig";

// Same form of call, but abbreviated
// const App = () => <Routes />;

// export default App;

export default class App extends Component {
    render() {
        return <Routes />;
    }
};