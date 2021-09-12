import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-PT">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/img/icon-512.png" />
                    <meta name="theme-color" content="#FF7900" />
                    <meta
                    name="description"
                    content="Somos é uma empresa angolana que tem como objectivo encotrar passageiros na internet que pretendem viajar no interior de Angola e a nossa missão é atender com respeito, responsablidade e qualidade os nossos clientes."
                    />
                </Head>
            
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}