import React from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import UserData from "./components/SearchResult";
import Title from "./components/Title";
function App() {
  const [user, setuser] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`https://api.github.com/users/octocat`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <Title />
      <Search user={user} setuser={setuser} setData={setData} />
      <UserData data={data} />
    </>
  );
}

export default App;
