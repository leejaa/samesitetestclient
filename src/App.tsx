import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const apiUrl = "https://samesitetestapi.vercel.app";

function App() {
  const [token, setToken] = useState("디폴트");

  const handleClickNoConfig = () => {
    fetch(`${apiUrl}/api/samesitedefault`, {
      method: "post",
      credentials: "include",
    });
  };

  const handleClickNone = () => {
    fetch(`${apiUrl}/api/samesitenone`, {
      method: "post",
      credentials: "include",
    });
  };
  const handleClickLax = () => {
    fetch(`${apiUrl}/api/samesitelax`, {
      method: "post",
      credentials: "include",
    });
  };
  const handleClickStrict = () => {
    fetch(`${apiUrl}/api/samesitestrict`, {
      method: "post",
      credentials: "include",
    });
  };
  const handleLogout = () => {
    fetch(`${apiUrl}/api/logout`, {
      method: "post",
      credentials: "include",
    });
  };
  const handleRequestLogin = async () => {
    const result = await fetch(`${apiUrl}/api/login`, {
      method: "get",
      credentials: "include",
    });
    const data = await result.json();
    const newToken = data?.token;
    setToken(newToken);
  };

  return (
    <div>
      <div>
        <button onClick={handleClickNoConfig}>
          same site 설정 안하고 쿠키 발급
        </button>
        <button onClick={handleClickNone}>same site none 에서 쿠키 발급</button>
        <button onClick={handleClickLax}>same site lax 에서 쿠키 발급</button>
        <button onClick={handleClickStrict}>
          same site strict 에서 쿠키 발급
        </button>
        <button onClick={handleLogout}>로그아웃</button>
        <button onClick={handleRequestLogin}>로그인 GET 요청</button>
      </div>
      <div>
        <h1>{token}</h1>
      </div>
    </div>
  );
}

export default App;
