import React from "react";

import FoodAdverts from "./FoodAdverst";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

const foodAdverts = [
  {
    id: 1,
    image: "https://www.diyetkolik.com/site_media/media/nutrition_images/24_Pizza_Etli.jpg"    ,
    type: "Etli Karışık Pizza",
    ingredients: "Sucuk,Et,Domates,Biber",
    forPeople: "2-3 Kişilik",
    cost: "100 TL ",
  },
  {
    id: 2,
    image: "https://imgrosetta.mynet.com.tr/file/87643/1200x824.jpg"    ,
    type: "Sucuklu Pizza",
    ingredients: "Sucuk,Domates Sosu,Fesleğen",
    forPeople: "2-3 Kişilik",
    cost: "80 TL",
  },
  {
    id: 3,
    image:
      "https://i1.haber7.net//haber/haber7/photos/2020/44/qRhAC_1604058164_302.jpg",
    type: " Peynirli Pizza",
    ingredients: "Mozarella,Cheddar,Parmesan  ",
    forPeople: "2-3 Kişilik",
    cost: "60 TL ",
  },
  
];
export default function MainPage() {
  const history = useHistory();
  const toOrderPage = () => {
    history.push("/order-pizza");
  };
  const toFirstPage = () => {
    history.push("/");
  };
  return (
    <div className="MainPageContainer">
      <div className="menuPart">
        <button className="secondButton" onClick={toFirstPage}>
          GİRİŞ
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

        <button className="secondButton" onClick={toOrderPage}>
          SİPARİŞ VER
        </button>
      </div>
      <div className="pizzaPart">
        <img
          src="https://t4.ftcdn.net/jpg/02/80/76/25/360_F_280762521_j1sQEgHTmtfoUcAEgoPt1gdBu6yinZQN.jpg"
          alt="pizza"
          className="pizzaImg"
        />

        <div className="textPart">
          <h1 onClick={toOrderPage}>
            Kim Pizza İster ?
          </h1>
        </div>
      </div>
      <div className="blackPart">
        <h1>Seçenekler</h1>
        <div className="AdvertsPart">
          {foodAdverts.map((event, key) => (
            <FoodAdverts key={event.id} foodAdverts={event} />
          ))}
        </div>
      </div>
      <div className="footerPart">

        <Footer />
      </div>
    </div>
  );
}