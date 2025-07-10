import Counter from "./features/count/Counter"
import { RouterProvider } from "react-router"
import router from "./router/Routers"

const App = () => {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
