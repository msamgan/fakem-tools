import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BarcodeGeneratorPage from "./pages/BarcodeGenerator/BarcodeGenerator";
import JsonFormatterPage from "./pages/JsonFormatter/JsonFormatter";


const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/barcode-generator" exact
                   component={BarcodeGeneratorPage}/>
            <Route path="/json-formatter" exact
                   component={JsonFormatterPage}/>
        </Switch>
    </Router>
);

export default Routes;
