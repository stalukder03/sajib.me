import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { render } from '@wordpress/element';
import {AppProvider} from './context'

render(
    <BrowserRouter>
        <AppProvider>
            <App />
        </AppProvider>
    </BrowserRouter>,
    document.getElementById('__react_sajib_me')
);