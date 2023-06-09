import React from "react";
import LoginImg from "../../assets/loginimg.png";
import "./login.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function handleLoginClick() {
    const { ethereum } = window;
    if (!ethereum || !ethereum.isMetaMask) {
      alert("Please install Metamask to use this feature.");
      return;
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0];
      setIsLoggedIn(true);

      navigate("Home");
    } catch (error) {
      alert("Failed to log in.");
      console.error(error);
    }
  }

  return (
    <div className="login-div">
      <div className="about">About</div>
      <div className="main-login">
        <div className="left">
          <img className="login-img" src={LoginImg} alt="img" />
        </div>
        <div className="right">
          <div className="heading">
            Spotting <br />
            Inauthentic <br /> Products
          </div>
          <button className="login-btn" onClick={handleLoginClick}>
            LOGIN VIA METAMASK
          </button>
          <p className="moto">
            Yes we believe effortless authentication methods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
