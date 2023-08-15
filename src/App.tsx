import { RouterProvider } from "react-router-dom";
import { main } from "./routes/Routes"
import Text from "./Pages/Text"

const App = () => {
  return (
    <RouterProvider router={main}/>
    // <Text />
  )
}

export default App