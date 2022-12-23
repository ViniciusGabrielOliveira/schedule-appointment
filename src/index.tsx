import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import './index.css';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConfigProvider
                locale={{ locale: 'pt_BR' }}
                theme={{
                    components: {
                        Calendar: {
                            colorBgBase: '#00000000',
                            colorBgLayout: '#00000000',
                            colorBgContainer: '#00000000',
                            colorBorder: '#586994',
                            colorPrimary: '#586994',
                            colorBgElevated: '#00000000',
                            colorPrimaryBg: '#00000000',
                            colorBgSpotlight: '#00000000'
                        },
                        Select: {
                            colorBgBase: '#00000000',
                            colorBgLayout: '#00000000',
                            colorBgContainer: '#00000000',
                            colorBorder: '#586994'
                        },
                        Radio: {
                            colorBgBase: '#00000000',
                            colorBgLayout: '#00000000',
                            colorBgContainer: '#00000000',
                            colorBorder: '#586994',
                            colorPrimary: '#586994',
                            colorPrimaryBg: '#586994',
                            colorSuccessBg: '#586994',
                            colorBgSpotlight: '#586994',
                            colorBgMask: '#586994'
                        }
                    },
                }}
            >
                <App />
            </ConfigProvider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
