import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./features/spotifyAction/spotifySlice";
import Login from "./Login";

function App() {
  const [token, setToken] = useState(null);
  const CLIENT_ID = "cfc0e40b857f403688c3c8f3d181baff";
  const REDIRECT_URI = "http://localhost:5173/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  let confirmation = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

  useEffect(() => {
    // let hash = window.location.hash.split("#")[1].split("&").find(iteam=>  iteam.startsWith("access_token")).split("=")[1]
    let hash = window.location.hash;
    let valFromLS = localStorage.getItem("token");
    if (!valFromLS && hash) {
      hash = window.location.hash.split("#")[1].split("&")[0].split("=")[1];
      localStorage.setItem("token", hash);
      window.location.hash=""
    }
    setToken(valFromLS);
  }, []);
  function handleLogout() {
    localStorage.clear();
    setToken(null);
  }
  return (
    <>
      {!token ? (
        <Login confirmation={confirmation} />
      ) : (
        <>
          <div>Welcome to spotify</div>
          <button onClick={handleLogout}>logout</button>
        </>
      )}
    </>
  );
}

export default App;
