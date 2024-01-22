import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux-store/store";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddPost from "./pages/AddPost";
import SignUp from "./pages/SignUp";
import AllPost from "./pages/AllPost";
import EditPost from "./pages/EditPost";
import Post from "./pages/Post";
import AuthLayout from "./components/AuthLayout";


const router = createBrowserRouter([
  {
    path: "/",
    elelment: <App />,
    children: [
      {
        path: "/",
        elelment: <Home />,
      },
      {
        path: "/login",
        elelment: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        elelment: (
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        elelment: (
          <AuthLayout authentication={true}>
            <AllPost />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        elelment: (
          <AuthLayout authentication={true}>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        elelment: (
          <AuthLayout authentication={true}>
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        elelment: (
          <AuthLayout authentication={true}>
            <Post />
          </AuthLayout>
        ),
      },
      {        
        path: "*",
        elelment: <h1>404</h1>,
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
