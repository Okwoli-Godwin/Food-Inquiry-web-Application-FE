import {Outlet} from "react-router-dom"
import { Footer, Header } from ".."

const Homelayout = () => {
  return (
      <div>
          <Header />
          <Outlet />
          <Footer />
    </div>
  )
}

export default Homelayout