
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"



const App = () => {
    const [progress, setProgress] = useState(0)



    return (
        <div>
            <Router>

                <Navbar />
                <LoadingBar height={3} color="white" progress={progress} />
                <Switch>
                    <Route exact path="/"><News setProgress={setProgress} pageSize={9} key="general" country="us" category="general" /> </Route>
                    <Route exact path="/business"><News setProgress={setProgress} pageSize={9} key="business" country="us" category="business" /> </Route>

                    <Route exact path="/entertainment"><News setProgress={setProgress} pageSize={9} key="entertainment" country="us" category="entertainment" /> </Route>
                    <Route exact path="/health"><News setProgress={setProgress} pageSize={9} key="health" country="us" category="health" /> </Route>
                    <Route exact path="/science"><News setProgress={setProgress} pageSize={9} key="science" country="us" category="science" /> </Route>
                    <Route exact path="/sports"><News setProgress={setProgress} pageSize={9} key="sports" country="us" category="sports" /> </Route>
                    <Route exact path="/technology"><News setProgress={setProgress} pageSize={9} key="technology" country="us" category="technology" /> </Route>


                </Switch>
            </Router>
        </div>
    )

}
export default App;