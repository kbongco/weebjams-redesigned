import { useEffect, useState } from 'react';
import './App.css'
import Login from './Login/Login'
import Search from './Screens/Search/Search';

function App() {

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    const localToken = window.localStorage.getItem("token");

    if (!localToken && hash) {
      const tokenPart = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"));

      if (tokenPart) {
        const token = tokenPart.split("=")[1];
        window.location.hash = "";
        window.localStorage.setItem("token", token);
        setToken(token);
      }
    } else if (localToken) {
      setToken(localToken);
    }
  }, []);

  return (
    <> {token ? <Search/> : <Login/>}
    </>
  )
}

export default App
