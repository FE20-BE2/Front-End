import Navbar from "./components/Navbar"
import KelasOffline from "./components/Kelasoffline"
import Footer from "./components/Footer"
import { useEffect } from "react"

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
      <Footer />
    </>
  )
}

export default App
