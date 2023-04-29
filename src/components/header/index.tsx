import React from "react";
import { container } from "./header.css";

const Header: React.FC = () => {
  return (
    <header className={container}>
      <h1>Hello React!</h1>
    </header>
  );
};

export default Header;
