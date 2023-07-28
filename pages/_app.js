import 'bootstrap/dist/css/bootstrap.min.css'
import '../app/globals.css'
import { useEffect } from 'react'
import '../global.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('jquery').then(($) => {
      window.jQuery = $
    })
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Space+Grotesk"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
