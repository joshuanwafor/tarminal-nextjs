import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <div>
    <link href="/css/bootstrap.min.css" rel="stylesheet" />

    <Component {...pageProps} />

    <script src="/js/bootstrap.bundle.min.js" ></script>
  </div>

}

export default MyApp
