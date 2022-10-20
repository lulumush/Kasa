import React from "react"

import Header from '../components/Header'
//import Footer from '../components/Footer'
import Error from '../components/Error'

function ErrorPage() {
  return (
    <>
      <Header />
      <main>
        <Error />
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  )
}

export default ErrorPage