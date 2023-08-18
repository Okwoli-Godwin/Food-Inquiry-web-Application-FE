import { RouterProvider } from "react-router-dom";
import { main } from "./routes/Routes"

const App = () => {
  return (
    <RouterProvider router={main}/>
  )
}

export default App