import React from "react";
import { useHistory } from "react-router-dom";

export default function SiparisAlindi() {
    const history = useHistory();
    const toAnaSayfa = () => {
      history.push("/mainpage");
    };
    return (
      <>
        <div className="successOrder">
          <div className="heading">
            <button className="secondButton" onClick={toAnaSayfa}>
              ANASAYFAYA DÖN
            </button>
            <h1 className="mainHeadingFirst">
              <img
                alt="logo"
                src="https://seeklogo.com/images/C/cici-s-pizza-logo-9BC7601F3D-seeklogo.com.png"
                style={{ width: "100px" }}
              />
            Teknolojik Yemekler 
            </h1>
          </div>
          <p className="congrats">TEBRİKLER ! SİPARİŞİNİZ ALINDI</p>
  
          <img
            src="https://static.wixstatic.com/media/b08816_028a1254cf0e4e8282c6edcc4d98e916~mv2.gif"
            className="gif"
            alt="courier"
          />
        </div>
      </>
    );
  }