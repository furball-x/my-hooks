import React from 'react'
import TitleMemo from './features/TitleDemo'

import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <div>
                <Router>
                    <Switch>
                        <Route path="/title-demo">
                            <TitleMemo></TitleMemo>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default App
