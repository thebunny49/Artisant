import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div
        className="b1"
        style={{ width: "100%", height: 688.28, background: "#0C0C0C" }}
      >
        <div
          className="m1 container"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img
            src="./artisant.svg"
            style={{ width: 142, height: 200, marginLeft: 50 }}
            alt=""
          />
          <div style={{ marginTop: 80 }}>
            <img src="./discord.png" style={{ width: 50, height: 50 }} alt="" />
            <img src="./twitter.png" style={{ width: 50, height: 50 }} alt="" />
            <img src="./reddit.png" style={{ width: 50, height: 50 }} alt="" />
          </div>
        </div>
        <div
          className="footer"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingLeft: 88,
          }}
        >
          <div className="music-producers-female-container">
            <div
              className="heading"
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              Popular Services
            </div>
            <p>Music Producers</p>
            <p>Female Singer</p>
            <p>Male Singer</p>
            <p>Mixing Engineers</p>
            <p>Mastering Engineers</p>
            <p>Drum Tracks</p>
            <p>Beat Makers</p>
            <p>Songwriters</p>
            <p>Recording Studios</p>
            <p>All Services</p>
          </div>
          <div className="music-producers-female-container">
            <div
              className="heading"
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              Popular Location
            </div>
            <p>New York</p>
            <p>Los Angeles</p>
            <p>Nashville</p>
            <p>London, UK</p>
            <p>Mixing Engineers in New York</p>
            <p>Mastering Studios in New York</p>
            <p>Session Singers in Nashville</p>
            <p>Music Producers in Los Angeles</p>
            <p>Songwriters in Nashville</p>
            <p>All Locations</p>
          </div>

          <div className="music-producers-female-container">
            <div
              className="heading"
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              Popular Genre
            </div>
            <p>Electronic</p>
            <p>Rock</p>
            <p>Pop</p>
            <p>EDM</p>
            <p>Heavy Metal</p>
            <p>Hip Hop</p>
            <p>House</p>
            <p>Singer Songwriter</p>
            <p>Music Pros by Credits</p>
            <p>All Genres</p>
          </div>
          <div className="music-producers-female-container">
            <div
              className="heading"
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: 600,
                marginBottom: 10,
              }}
            >
              Latest Articles
            </div>
            <p>How Much to Produce a Song</p>
            <p>{`20 Recording & Mixing Tips`}</p>
            <p>5 Ways EDM Mixing is Different</p>
            <p>World's first Mixer POV Video</p>
            <p>5 Tips For Recording Drums</p>
            <p>Luca Pretolesi POV Video</p>
            <p>Why Hiring a Producer Matters</p>
            <p>Working with a Mix Engineer</p>
            <p>Music Production Glossary</p>
            <p>Artisant Tracks</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
