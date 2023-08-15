import { RouterProvider } from "react-router-dom";
import { main } from "./routes/Routes"
import Text from "./Pages/Text"
import ScrollToTop from "./Pages/ScrollToTop";

const App = () => {
  return (
    <RouterProvider router={main}/>
    // <Text />
  )
}

export default App