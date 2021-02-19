import { AppProps } from 'next/app'
import Head from 'next/head'
import '../src/styling/App.scss'
import { Provider } from 'react-redux'
import store from '../src/redux/store';

const App = ({ Component, pageProps }: AppProps) => {

    return (
        <Provider store={store}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" />
            </Head>
            <Component {...pageProps} />
        </Provider>
    )
}

export default App