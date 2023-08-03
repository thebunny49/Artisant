import React from "react";
import background from "../assets/rectangle-96@2x.png";
import background2 from "../assets/rectangle-97@2x.png";
import background4 from "../assets/rectangle-98@2x.png";
import background3 from "../assets/photo.png";
import start from "../assets/star.svg";
function User() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
      }}
    >
      <div className="2nd" style={{ marginLeft: 50, marginBottom: 10 }}>
        <div
          className="card"
          style={{
            backgroundImage: `url(${background})`,
            width: 251,
            height: 271,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "none",
            border: "none",
          }}
        >
          <div className="card-body"></div>
          <div
            style={{
              position: "absolute",
              marginLeft: -20,
              bottom: 20,
              backgroundColor: "white",
              width: 120,
              height: 53,
              borderRadius: 5,
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 18, marginLeft: 10 }}>
              Sam Moore
            </div>
            <div style={{ fontWeight: 500, fontSize: 14, marginLeft: 10 }}>
              Musician
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img
              width="20"
              height="20"
              style={{ color: "white", fill: "green" }}
              src={start}
              alt="star--v1"
            />
            <p style={{ marginLeft: 8, marginRight: 6, color: "white" }}>4.8</p>
          </div>
        </div>
      </div>
      <div className="2nd" style={{ marginLeft: 50, marginBottom: 10 }}>
        <div
          className="card"
          style={{
            backgroundImage: `url(${background2})`,
            width: 251,
            height: 271,
            backgroundSize: "cover",
            objectFit: "contain",
            backgroundRepeat: "no-repeat",
            backgroundColor: "none",
          }}
        >
          <div className="card-body"></div>
          <div
            style={{
              position: "absolute",
              marginRight: -20,
              right: 0,
              top: "50%",
              backgroundColor: "white",
              width: 120,
              height: 53,
              borderRadius: 5,
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 18, marginLeft: 10 }}>
              Sania Sarif...
            </div>
            <div style={{ fontWeight: 500, fontSize: 14, marginLeft: 10 }}>
              Artist
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img
              width="20"
              height="20"
              style={{ color: "white", fill: "green" }}
              src={start}
              alt="star--v1"
            />
            <p style={{ marginLeft: 8, marginRight: 6, color: "white" }}>4.8</p>
          </div>
        </div>
      </div>
      <div className="2nd" style={{ marginLeft: 50, marginBottom: 10 }}>
        <div
          className="card"
          style={{
            backgroundImage: `url(${background4})`,
            width: 251,
            height: 271,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "none",
          }}
        >
          <div className="card-body"></div>
          <div
            style={{
              position: "absolute",
              marginLeft: -20,
              bottom: 20,
              backgroundColor: "white",
              width: 120,
              height: 53,
              borderRadius: 5,
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 18, marginLeft: 10 }}>
              John Lee
            </div>
            <div style={{ fontWeight: 500, fontSize: 14, marginLeft: 10 }}>
              Designer
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img
              width="20"
              height="20"
              style={{ color: "white", fill: "green" }}
              src={start}
              alt="star--v1"
            />
            <p style={{ marginLeft: 8, marginRight: 6, color: "white" }}>4.8</p>
          </div>
        </div>
      </div>
      <div className="2nd" style={{ marginLeft: 50, marginBottom: 10 }}>
        <div
          className="card"
          style={{
            backgroundImage: `url(${background3})`,
            width: 251,
            height: 271,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "none",
          }}
        >
          <div className="card-body"></div>

          <div
            style={{
              position: "absolute",
              marginRight: -20,
              right: 0,
              top: "50%",
              backgroundColor: "white",
              width: 120,
              height: 53,
              borderRadius: 5,
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 18, marginLeft: 10 }}>
              Laticia Sam...
            </div>
            <div style={{ fontWeight: 500, fontSize: 14, marginLeft: 10 }}>
              Content Writer
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img
              width="20"
              height="20"
              style={{ color: "white", fill: "green" }}
              src={start}
              alt="star--v1"
            />
            <p style={{ marginLeft: 8, marginRight: 6, color: "white" }}>4.8</p>
          </div>
        </div>
      </div>
      <div className="2nd" style={{ marginLeft: 50, marginBottom: 10 }}>
        <div
          className="card"
          style={{
            backgroundImage: `url(${background4})`,
            width: 251,
            height: 271,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "none",
          }}
        >
          <div className="card-body"></div>
          <div
            style={{
              position: "absolute",
              marginLeft: -20,
              bottom: 20,
              backgroundColor: "white",
              width: 120,
              height: 53,
              borderRadius: 5,
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 18, marginLeft: 10 }}>
              David Louis
            </div>
            <div style={{ fontWeight: 500, fontSize: 14, marginLeft: 10 }}>
              Photographer
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img
              width="20"
              height="20"
              style={{ color: "white", fill: "green" }}
              src={start}
              alt="star--v1"
            />
            <p style={{ marginLeft: 8, marginRight: 6, color: "white" }}>4.8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
