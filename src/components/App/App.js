import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configurateStore } from '../../store/store';
import './App.css';
import 'antd/dist/antd.css';
import ItemList from '../../containers/ConnectedItemList';

const store = configurateStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ItemList />
            </Provider>
        )
    };
};

export default App;
