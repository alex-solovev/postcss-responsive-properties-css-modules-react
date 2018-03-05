import React, { Component } from 'react'
import { render } from 'react-dom'
import styles from './App.sss';

class App extends Component {
    render() {
        return (
            <div className={styles.container}>App</div>
        )
    }
}

render(<App />, document.getElementById('app'));