import { ConfigProvider, Spin } from "antd";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import ErrorPage from "./pages/ErrorPage";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

const routes = createBrowserRouter([
  { path: "", element: <Navigate to={"home"} />, errorElement: <ErrorPage /> },
  {
    path: "sign-up",
    element: (
      <Suspense fallback={<Spin />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "home",
    element: (
      <Suspense>
        <Home />
      </Suspense>
    ),
    children: [
      {
        path: ":sku",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
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
