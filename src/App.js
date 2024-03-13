import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./components/nav-bar/nav-bar";
import SideBar from "./components/side-bar/side-bar";
import { mainApi } from "./components/utils/main-api";
import AddEmploye from "./pages/add-employe/add-employe";
import EditEmployee from "./pages/add-employe/edit-employee";
import Analytics from "./pages/analytics/analytics";
import CaseCategory from "./pages/case-categories/case-category";
import Cases from "./pages/cases/cases";
import Competitions from "./pages/competitions/competitions";
import CreateCompetitons from "./pages/competitions/create-competitons";
import ConclusionPage from "./pages/conclusion-page/conclusion-page";
import Conclusions from "./pages/conclusions/conclusions";
import CreateCase from "./pages/create-case/create-case";
import EditCase from "./pages/create-case/edit-case";
import CreateItem from "./pages/create-items/create-item";
import EditItem from "./pages/create-items/edit-item";
import CreatePromocode from "./pages/create-promocode/create-promoode";
import EditPromocode from "./pages/create-promocode/edit-promocode";
import Employees from "./pages/employees/employees";
import Items from "./pages/items/items";
import LoginPage from "./pages/login/login";
import Payments from "./pages/payments/payments";
import Positions from "./pages/positions/positions";
import Promocodes from "./pages/promocodes/promocodes";
import RarityCategory from "./pages/rarity-category/rarity-category";
import UpdateRarity from "./pages/rarity-category/update-rarity";
import ReviewPage from "./pages/review-page/review-page";
import Reviews from "./pages/reviews/reviews";
import Settings from "./pages/settings/settings";
import Support from "./pages/support/support";
import UserPage from "./pages/user-page/user-page";
import Users from "./pages/users/users";
import { loginUserAction } from "./redux/user-reducer";
import CreateRarity from "./pages/rarity-category/create-rarity";
import Conditions from "./pages/conditions/conditions";
import CreateCondion from "./pages/conditions/create-condition";
import EditCondion from "./pages/conditions/edit-condition";
import EditUserPage from "./pages/user-page/edit-user-page";
import EditCompetitons from "./pages/competitions/edit-competitons";
import PaymentPage from "./pages/payments/payment-page";


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

  useEffect(() => {
    if (!localStorage.getItem("token") && !isLogged) {
      navigate("/login");
    }
  }, [isLogged, navigate, localStorage.getItem("token")]);

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
                <Route path="/" element={<Analytics />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/users" element={<Users />} />
                <Route path="/user/:user" element={<UserPage />} />
                <Route path="/edit-user/:user" element={<EditUserPage />} />

                <Route path="/employees" element={<Employees />} />
                <Route path="/cases" element={<Cases />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/payment/:id" element={<PaymentPage />} />
               
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/review/:review" element={<ReviewPage />} />
                <Route path="/positions" element={<Positions />} />
                <Route path="/create-item" element={<CreateItem />} />
                <Route path="/edit-item/:item" element={<EditItem />} />
                <Route path="/rarity" element={<RarityCategory />} />
                <Route path="/update-rarity/:item" element={<UpdateRarity />} />

                <Route path="/support" element={<Support />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/conclusions" element={<Conclusions />} />
           
                <Route
                  path="/conclusion/:conclusion"
                  element={<ConclusionPage />}
                />
                <Route path="/promocodes" element={<Promocodes />} />
                <Route path="/create-promocode" element={<CreatePromocode />} />
                <Route path="/edit-promocode/:id" element={<EditPromocode />} />
                <Route path="/items" element={<Items />} />
                <Route path="/add-employee" element={<AddEmploye />} />
                <Route
                  path="/edit-employee/:employee"
                  element={<EditEmployee />}
                />
                <Route path="/competitons" element={<Competitions />} />
                <Route
                  path="/create-competiton"
                  element={<CreateCompetitons />}
                />
                <Route path="/competitons/:id" element={<EditCompetitons />} />


                <Route path="/login" element={<LoginPage />} />
                <Route path="/create-case" element={<CreateCase />} />

                <Route path="/edit-case/:case" element={<EditCase />} />
                <Route path="/cases-category" element={<CaseCategory />} />
                <Route path="/create-rarity" element={<CreateRarity />} />
                <Route path="/conditions" element={<Conditions />} />
                <Route path="/create-condition" element={<CreateCondion />} />
                <Route path="/edit-condition/:item" element={<EditCondion />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
