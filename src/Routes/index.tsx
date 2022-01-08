import Form from "Pages/Form"
import Forms from "Pages/Forms"
import Home from "Pages/Home"
import { RouteObject } from "react-router-dom"

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/forms",
    children: [
      {
        element: <Forms />,
        index: true,
      },
      {
        path: ":formName",
        element: <Form />,
      },
    ],
  },
]

export default Routes
