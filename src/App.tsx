import { ConfigProvider } from "antd";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Home from "./pages/Home";

const routes = createBrowserRouter([
  { path: "", element: <Navigate to={"home"} /> },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: ":id",
        element: <Home />,
      },
    ],
  },
]);
function App() {
  return (
    <Fragment>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#FFAB08",
          },
        }}
      >
        <RouterProvider router={routes} />
      </ConfigProvider>
    </Fragment>
  );
}

export default App;
