import '../styles/globals.css'
import './topbar/TopBar.css'
import './header/Header.css'
import './homepage/Homepage.css'
import TopBar from "./topbar/TopBar"
import Homepage from "./homepage/Homepage"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopBar />
      <Homepage />
      <Component {...pageProps}/ > 
    </>
  );

}

export default MyApp
