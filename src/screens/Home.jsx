import React from "react";
import Cards from "../component/Cards";
import User from "../component/User";
import Footer from "../component/Footer";
import "./Home.css";
import Navbar from "../component/Navbar";
function Home() {
  return (
    <>
      <Navbar />
      <div
        className="mainDiv"
        style={{
          width: "100%",
          height: 416,
          background: "#0C0C0C",
          marginBottom: 50,
        }}
      >
        <div
          className="mainDiv"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: 120,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <span
              style={{
                color: "white",
                fontSize: 35,
                fontFamily: "Helvetica",
                fontWeight: "700",
                wordWrap: "break-word",
                letterSpacing: 0.7,
              }}
            >
              Good morning
              <br />
            </span>
            <div
              style={{
                color: "#395EE3",
                fontSize: 22,
                fontFamily: "Helvetica",
                fontWeight: 600,
                wordWrap: "break-word",
              }}
            >
              Sam Moore
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="What you are looking?"
                style={{
                  paddingRight: 100,
                  marginTop: 30,
                  backgroundColor: "black",
                  borderRadius: 3,
                  color: "white",
                }}
              />
            </form>
            <button
              className="btn btn-primary"
              type="submit"
              style={{ marginTop: 30, marginLeft: 0, borderRadius: 3 }}
            >
              <img
                src="./sea.png"
                style={{ width: 16, height: 16, marginRight: 10 }}
                alt=""
              />
              Search
            </button>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{ background: "#F7F8FA", overflow: "hidden" }}
      >
        <div
          className="para"
          style={{
            fontSize: 30,
            color: "#0C0C0C",
            fontWeight: 700,
            wordWrap: "break-word",
          }}
        >
          Discover Top Talents
        </div>

        <div
          className=" d1 display-3"
          style={{
            background: "#F7F8FA",
            display: "flex",
            flexDirection: "row",
            overflow: "auto",
          }}
        >
          <Cards title="Musician" />
          <Cards title="UI Designer" />
          <Cards title="Gamer" />
          <Cards title="Guitarist" />
          <Cards title="Singer" />
          <Cards title="Developer" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "flex-start",
          }}
        >
          <div
            className="para"
            style={{
              fontSize: 30,
              fontWeight: "700",
              wordWrap: "break-word",
              marginBottom: 10,
            }}
          >
            Top Rated Talents
          </div>
          <div
            className="display-3 para"
            style={{
              fontSize: 15,
              width: "100%",
              height: 55,
              color: "#9B9A9A",
              fontFamily: "Inter",
              fontWeight: "400",
              letterSpacing: 0.54,
              wordWrap: "break-word",
            }}
          >
            The world’s best mixing & mastering engineers, singers, songwriters,
            producers and studio musicians for hire
          </div>
        </div>
        <div className="user" style={{ overflow: "auto", marginBottom: 100 }}>
          <User />
        </div>
      </div>
      <Footer />
      <div
        style={{
          width: "100%",
          textAlign: "center",
          color: "#0C0C0C",
          fontSize: 14,
          fontFamily: "Inter",
          fontWeight: "400",
          lineHeight: 4,
          letterSpacing: 0.8,
          wordWrap: "break-word",
        }}
      >
        © 2023 Artisant All Rights Reserved | Terms of Use | Privacy Policy |
        Contact | Help
      </div>
    </>
  );
}

export default Home;
