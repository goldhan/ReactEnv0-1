/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import '@babel/polyfill';
import App from './App';

const renderDom = (Component) => {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app'),
    );
};
renderDom(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        renderDom(require('./App').default);
    });
}
