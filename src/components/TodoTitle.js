import React from "react";
import { Link } from "react-router-dom";

export const TodoTitle = () => {
  return (
    <div>
      <header style={style.header}>
        <h1>Todo</h1>
        <div>
          <ul style={style.headerNavMenuList}>
            <li>
              <Link style={style.headerNavMenuItem} to={`/`}>
                Home
              </Link>
            </li>
            <li>
              <Link style={style.headerNavMenuItem} to={`/test/`}>
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
    margin: "32px auto",
    padding: "32px",
  },
  headerNavMenuList: {
    listStyle: "none",
  },
  headerNavMenuItem: {
    color: "#333",
    textDecoration: "none",
  },
};
