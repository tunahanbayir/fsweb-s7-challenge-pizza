import React from "react";
import "./SiparisFormu.css";
import Form from "./Form";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

export default function Order() {
    const history = useHistory();
    const toMainPage = () => {
      history.push("/mainpage");
    };
  
    return (
      <div className="orderPart">
        <div className="menuPart">
          <button className="secondButton" onClick={toMainPage}>
            ANASAYFA
          </button>
  
          <h1 className="mainHeading">
            {" "}
            <img
              alt="logo"
              src="https://seeklogo.com/images/C/cici-s-pizza-logo-9BC7601F3D-seeklogo.com.png"
              style={{ width: "100px" }}
            />
           Teknolojik Yemekler 
          </h1>
        </div>
  
  
        <div className="orderPart">
          <Form />
        </div>
  
        <div className="footerPart2">
          
          <Footer />
        </div>
      </div>
    );
  }