import React from "react";

const Card = ({ name, image }) => {
  return (
    <>
      <div
        style={{
          width: "300px",
          backgroundColor: "white",
          borderRadius: "25px",
          padding: "40px 40px 20px 40px",
          textAlign: "center",
          boxShadow: "50px",
        }}>
        <img
          src={image}
          style={{
            height: "300px",
            width: "inherit",
          }}
        />
        <h2
          style={{
            color: "GrayText",
          }}>
          {name}
        </h2>
      </div>
    </>
  );
};

export default Card;
