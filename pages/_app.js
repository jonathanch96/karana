import 'bootstrap/dist/css/bootstrap.min.css'
import '../app/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('jquery').then(($) => {
      window.jQuery = $
    })
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
