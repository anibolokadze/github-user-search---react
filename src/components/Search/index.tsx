import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Search.module.scss";

export default function Search({
  user,
  setuser,
  setData,
}: {
  user: string;
  setuser: any;
  setData: any;
}) {
  const [error, setError] = useState("");
  const handleSubmit = () => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((res) => {
        setData(res.data);
        setError("");
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setError("No result");
        }
      });
  };
  const handleSearch = (e: any) => {
    setuser(e.target.value);
  };
  return (
    <>
      <section>
        <input
          placeholder="Search username…"
          name="github user"
          onChange={handleSearch}
          className="input"
        />
        <button
          type="submit"
          value="Search"
          onClick={handleSubmit}
          className="submitBtn"
        >
          Search
        </button>
      </section>

      <span>{error}</span>
    </>
  );
}
