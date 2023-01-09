import '../styles/globals.css'
import AppProvider from '../context_api/AppProvider'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>)
}

export default MyApp
