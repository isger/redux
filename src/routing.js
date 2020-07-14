import React, {Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

/* Redux */
import {createStore} from "redux";
import {Provider} from "react-redux";

import allReducers from "./redux/reducers";

let store = createStore(allReducers);

/* Components */
const App = React.lazy(() => import('./components/core/App'));

const Routing = () => {

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="">
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <App/>
                        </Suspense>
                    </Route>
                    <Route path="/login">
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <App/>
                        </Suspense>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    )

}

export default Routing;