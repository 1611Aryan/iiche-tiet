import { lazy } from "react"
import { RouteObject } from "react-router-dom"

const Home = lazy(() => import("Pages/Home"))
const Form = lazy(() => import("Pages/Form"))
const Forms = lazy(() => import("Pages/Forms"))

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
