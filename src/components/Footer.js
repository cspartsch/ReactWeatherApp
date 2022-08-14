import React from "react";

export default function Footer() {
  return (
    <div id="footer">
      <div className="footer">
        <a
          href="https://github.com/cspartsch/FinalWeatherApp"
          target=""
          className="footerLink"
        >
          open-sourced
        </a>{" "}
        by carolyn partsch
        <div>
          icons made by
          <a
            href="https://www.flaticon.com/authors/iconixar"
            title="iconixar"
            className="footerLink"
            target=""
          >
            {" "}
            iconixar
          </a>{" "}
          from{" "}
          <a
            href="https://www.flaticon.com/"
            title="Flaticon"
            className="footerLink"
            target=""
          >
            {" "}
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
}
