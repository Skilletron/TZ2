import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Exercise_1 from './pages/Exercise_1';
import Exercise_2 from './pages/Exercise_2';
const AppRouter = () => {
    return (
        <Switch>
                <Route path={"/Exercise_1"}>
                <Exercise_1/>
                </Route>
                 <Route path={"/Exercise_2"}>
                <Exercise_2/>
            </Route>
        </Switch>
    );
};

export default AppRouter;