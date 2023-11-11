import React, { useState } from "react";
import { InputWithLabel } from "../../components/utils/utils";
import "./login.css";

import { useDispatch } from "react-redux";
import { ReactComponent as Error } from "../../assets/icons/error-icon.svg";
import { ReactComponent as Logo } from "../../assets/logo-dark.svg";
import { loginUserAction } from "../../redux/user-reducer";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // const handleLogin = async () => {
  //   let headersList = {
  //     Accept: "*/*",
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   };

  //   let bodyContent = `username=${login}&password=${password}`;

  //   let response = await fetch("https://legadrop.org/admin/sign-in", {
  //     method: "POST",
  //     body: bodyContent,
  //     headers: headersList,
  //   });

  //   let data = await response.json();
  //   if (data.access_token) {
  //     let is_logged = {
  //       is_logged: true,
  //     };
  //     dispatch(loginUserAction(is_logged));
  //     localStorage.setItem("token", data.access_token);
  //     navigate("/");
  //   } else {
  //     setError(true);
  //   }
  // };
 
  const handleLogin = () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    let bodyContent = `username=${login}&password=${password}`;

    fetch("https://legadrop.org/admin/sign-in", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access_token) {
          let is_logged = {
            is_logged: true,
          };
          dispatch(loginUserAction(is_logged));
          localStorage.setItem("token", data.access_token);
          navigate("/");
        } else {
          setError(true);
        }
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="login_page">
      <div className="login_modal">
        <div className="login_logo">
          <Logo />
        </div>
        <div className="logo_form  add_employe_input">
          <InputWithLabel
            id="user_login"
            label="Логин"
            value={login}
            event={setLogin}
          />
          <InputWithLabel
            id="user_password"
            label="Пароль"
            value={password}
            event={setPassword}
          />
        </div>
        <div className={error ? "login_error" : "login_error is_error"}>
          <Error />
          <p>Неверный логин или пароль</p>
        </div>
        <div className="login_btn_block">
          <div>
            <input type="checkbox" defaultChecked />
            <p>Запомнить меня</p>
          </div>
          <button className="login_btn" onClick={handleLogin}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
