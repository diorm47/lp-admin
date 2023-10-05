import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Analytics from "./pages/analytics/analytics";
import NavBar from "./components/nav-bar/nav-bar";
import SideBar from "./components/side-bar/side-bar";
import Users from "./pages/users/users";
import UserPage from "./pages/user-page/user-page";
import Employees from "./pages/employees/employees";
import AddEmploye from "./pages/add-employe/add-employe";
import { useDispatch } from "react-redux";
import { mainApi } from "./components/utils/main-api";
import { loginUserAction } from "./redux/user-reducer";
import LoginPage from "./pages/login/login";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      mainApi
        .reEnter()
        .then((res) => {
          dispatch(loginUserAction(res));
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [localStorage.getItem("token")]);

  return (
    <>
      <div className="site_content">
        <NavBar />
        <div className="page_wrapper">
          <div className="side_bar_wrapper">
            <SideBar />
          </div>
          <div className="page_content">
            <Suspense fallback={"loading....."}>
              <Routes>
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/users" element={<Users />} />
                <Route path="/user/:user" element={<UserPage />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/add-employee" element={<AddEmploye />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
