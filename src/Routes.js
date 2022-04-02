import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import BarcodeGeneratorPage from "./pages/BarcodeGenerator/BarcodeGenerator"
import JsonFormatterPage from "./pages/JsonFormatter/JsonFormatter"
import UserGeneratorPage from "./pages/UserGenerator/UserGenerator"
import ContentGeneratorPage from "./pages/ContentGenerator/ContentGenerator"
import TestApiPage from "./pages/TestApi/TestApi"
import DiffCheckerPage from "./pages/DiffChecker/DiffChecker"
import CharacterCounter from "./pages/CharacterCounter/CharacterCounter"
import JsonToExcel from "./pages/JsonToExcelPage/JsonToExcelPage"
import HtmlToMarkdown from "./pages/HtmlToMarkdown/HtmlToMarkdown"

/**
 * A React component that renders the routes for the application.
 * @returns JSX<Routes>
 */
const Routes = () => {
    const routes = [
        {
            path: "/",
            exact: true,
            component: HomePage
        },
        {
            path: "/barcode-generator",
            exact: true,
            component: BarcodeGeneratorPage
        },
        {
            path: "/json-formatter",
            exact: true,
            component: JsonFormatterPage
        },
        {
            path: "/user",
            exact: true,
            component: UserGeneratorPage
        },
        {
            path: "/content",
            exact: true,
            component: ContentGeneratorPage
        },
        {
            path: "/api",
            exact: true,
            component: TestApiPage
        },
        {
            path: "/diff-checker",
            exact: true,
            component: DiffCheckerPage
        },
        {
            path: "/character-counter",
            exact: true,
            component: CharacterCounter
        },
        {
            path: "/json-to-excel",
            exact: true,
            component: JsonToExcel
        },
        {
            path: "/html-to-markdown",
            exact: true,
            component: HtmlToMarkdown
        }
    ]

    return (
        <Router>
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
            </Switch>
        </Router>
    )
}

export default Routes
