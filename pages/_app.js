import '@/styles/globals.css'
import {Inter} from 'next/font/google'

const globalFont = Inter({
  subsets:['latin']
})
export default function App({ Component, pageProps }) {
  return (
      <div className={globalFont.className}>
      <Component {...pageProps} />
      </div>
  )
}
