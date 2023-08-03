import React from "react";

const Cards = ({ title }) => {
  return (
    <div className="grid" style={{ height: 300, margin: 10 }}>
      <div
        style={{
          border: "1px solid white",
          borderColor: "#ffffff",
          borderRadius: 5,
          backgroundColor: "white",
          width: 261,
          height: 194,
          marginTop: 50,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingLeft: 10,
            paddingRight: 20,
            marginTop: 30,
            marginLeft: 28,
          }}
        >
          <img alt="" src="/group-198.svg" />
          <img alt="" src="/group-204.svg" />
        </div>
        <div
          style={{
            fontSize: 22,
            marginTop: 17,
            fontWeight: "600",
            marginLeft: 28,
            paddingRight: 20,
          }}
        >
          {title}
        </div>

        <div
          style={{
            color: "#9B9A9A",
            fontSize: 14.9,
            marginLeft: 28,
            marginTop: 17,
            paddingRight: 20,
          }}
        >
          Lorem Ipsum is simply dummy text of the printing dummy and type.
        </div>
      </div>
    </div>
  );
};

export default Cards;
