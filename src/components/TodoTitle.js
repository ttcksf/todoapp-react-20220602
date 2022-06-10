import React from "react";
import { Link } from "react-router-dom";

export const TodoTitle = () => {
  return (
    <div>
      <header style={style.header}>
        <h1>Todo</h1>
        <div>
          <ul style={style.headerNavUl}>
            <li>
              <Link style={style.headerNavA} to={`/`}>
                Home
              </Link>
            </li>
            <li>
              <Link style={style.headerNavA} to={`/test/`}>
                Test
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

const style = {
  header: {
    textAlign: "center",
    margin: "2rem auto",
    padding: "2rem",
  },
  headerNavUl: {
    listStyle: "none",
  },
  headerNavA: {
    color: "#333",
    textDecoration: "none",
  },
};
