import { ConfigProvider, theme } from "antd";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import ErrorPage from "./pages/ErrorPage";
import { lazy, Suspense, useEffect } from "react";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import SignUp from "./pages/SignUp";
import SendEmail from "./pages/forgot password/SendEmail";
import GetCode from "./pages/forgot password/GetCode";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

const routes = createBrowserRouter([
  { path: "", element: <Navigate to={"home"} />, errorElement: <ErrorPage /> },
  {
    path: "sign-up",
    element: (
      <Suspense fallback={<Loading />}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "forgot-password",
    element: (
      <Suspense fallback={<Loading />}>
        <SendEmail />
      </Suspense>
    ),
  },
  {
    path: "get-the-code",
    element: (
      <Suspense fallback={<Loading />}>
        <GetCode />
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "home",
    element: (
      <Suspense fallback={<Loading />}>
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
  const mode = useSelector((state: RootState) => state.theme.mode);
  useEffect(() => {
    const rootElement = document.querySelector("body");
    if (rootElement) {
      if (mode === "light") {
        rootElement.style.backgroundColor = "#f9f9f9";
      } else {
        rootElement.style.backgroundColor = "#191919";
      }
    }
  }, [mode]);
  return (
    <Fragment>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#FFAB08",
          },
          algorithm:
            mode === "light" ? theme.defaultAlgorithm : theme.darkAlgorithm,
        }}
      >
        <RouterProvider router={routes} />
      </ConfigProvider>
    </Fragment>
  );
}

export default App;
