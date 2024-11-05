import React from "react";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          {" "}
          <a href="https://catalyser.com/" data-kmt={1}>
            {" "}
            <img src="/images/logo.svg" alt="" />
          </a>
        </div>
        <div className="links">
          {" "}
          <a
            href="https://catalyser.com/new-register"
            
            data-kmt={1}
          >
            Register your charity
          </a>{" "}
          <a href="https://my.catalyser.com/" data-kmt={1}>
            <button className="empty">Charity Login</button>
          </a>
        </div>
        <div className="cta">
          {" "}
          <a href="https://my.catalyser.com/" data-kmt={1}>
            <button className="empty">Charity Login</button>
          </a>
          <div className="menu" >
            {" "}
            <span /> <span />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
