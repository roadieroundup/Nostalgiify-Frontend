import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { store } from './store';
import { AppTheme } from './theme/AppTheme';

export const NostalgiifyApp = () => {
    return (
        <Provider store={store}>
            <BrowserRouter basename="Nostalgiify-Frontend">
                <AppTheme>
                    <AppRouter />
                </AppTheme>
            </BrowserRouter>
        </Provider>
    );
};
