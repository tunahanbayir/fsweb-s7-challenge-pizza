import React from "react";

export default function FoodAdverts(props) {
  const { foodAdverts } = props;

  return (
    <div className="foodAdverts">
      <img src={foodAdverts.image} alt="foods" />
      <p>{foodAdverts.type}</p>
      <p>{foodAdverts.ingredients}</p>
      <p>{foodAdverts.forPeople}</p>
      <p>{foodAdverts.cost}</p>
    </div>
  );
}