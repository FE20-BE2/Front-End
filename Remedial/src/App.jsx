import Navbar from "./components/Navbar"
import KelasOffline from "./components/Kelasoffline"
// import KelasOnline from "./components/KelasOnline"
import Footer from "./components/Footer"
import { useEffect } from "react"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {

  useEffect(() => {
    const script = document.createElement("script")

    script.src =
      "./src/js/script.js"

    script.async = true

    script.crossOrigin = "anonymous"

    document.body.appendChild(script)

    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <Navbar />
      <KelasOffline />
      {/* <Router>
        <Switch>
          <Route path="/KelasOnline" exact component={KelasOnline} />
        </Switch>
      </Router> */}
      <Footer />
    </>
  )
}

export default App
