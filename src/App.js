import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Analytics from "./pages/analytics/analytics";
import NavBar from "./components/nav-bar/nav-bar";
import SideBar from "./components/side-bar/side-bar";
import Users from "./pages/users/users";
import UserPage from "./pages/user-page/user-page";
import Employees from "./pages/employees/employees";
import AddEmploye from "./pages/add-employe/add-employe";
import { useDispatch, useSelector } from "react-redux";
import { mainApi } from "./components/utils/main-api";
import { loginUserAction } from "./redux/user-reducer";
import LoginPage from "./pages/login/login";
import UpdateEmploye from "./pages/update-employee/update-employee";
import Cases from "./pages/cases/cases";
import CaseCategory from "./pages/case-categories/case-category";
import CreateCase from "./pages/create-case/create-case";
import Items from "./pages/items/items";
import Competitions from "./pages/competitions/competitions";
import Payments from "./pages/payments/payments";
import Settings from "./pages/settings/settings";
import Reviews from "./pages/reviews/reviews";
import Support from "./pages/support/support";
import Conclusions from "./pages/conclusions/conclusions";
import Promocodes from "./pages/promocodes/promocodes";
import Positions from "./pages/positions/positions";
import CreateItem from "./pages/create-items/create-item";
import EditCase from "./pages/create-case/edit-case";
import CreatePromocode from "./pages/create-promocode/create-promoode";
import ReviewPage from "./pages/review-page/review-page";
import ConclusionPage from "./pages/conclusion-page/conclusion-page";
import PaymentPage from "./pages/payment-page/payment-page";
import EditPromocode from "./pages/create-promocode/edit-promocode";

function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector((user) => user.user.user.is_logged);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     mainApi
  //       .reEnter()
  //       .then((res) => {
  //         dispatch(loginUserAction(res));
  //       })
  //       .catch((error) => {
  //         console.log("error", error);
  //       });
  //   }
  // }, [localStorage.getItem("token")]);

  // useEffect(() => {
  //   if (!localStorage.getItem("token") && !isLogged) {
  //     navigate("/login");
  //   }
  // }, [isLogged, navigate, localStorage.getItem("token")]);

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
                <Route path="/cases" element={<Cases />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/payment/:payment" element={<PaymentPage />} />

                <Route path="/reviews" element={<Reviews />} />
                <Route path="/review/:review" element={<ReviewPage />} />
                <Route path="/positions" element={<Positions />} />
                <Route path="/create-item" element={<CreateItem />} />
                <Route path="/support" element={<Support />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/conclusions" element={<Conclusions />} />
                <Route
                  path="/conclusion/:conclusion"
                  element={<ConclusionPage />}
                />

                <Route path="/promocodes" element={<Promocodes />} />
                <Route path="/create-promocode" element={<CreatePromocode />} />
                <Route path="/edit-promocode" element={<EditPromocode />} />
                <Route path="/items" element={<Items />} />
                <Route path="/add-employee" element={<AddEmploye />} />
                <Route path="/competitons" element={<Competitions />} />
                <Route path="/update-employee" element={<UpdateEmploye />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/create-case" element={<CreateCase />} />
                <Route path="/edit-case" element={<EditCase />} />
                {/* <Route path="/edit-case/:case" element={<EditCase />} /> */}
                <Route path="/cases-category" element={<CaseCategory />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
