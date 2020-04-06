/* eslint-disable react/jsx-filename-extension */
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import routes from './routes';

import NotFound from './NotFound';

import store from './Redux/store';

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                {routes.map(({ path, component }) => (
                    <Route
                        key={path}
                        path={path}
                        component={component}
                        exact
                    />
                ))}
                <Route key="*" path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
