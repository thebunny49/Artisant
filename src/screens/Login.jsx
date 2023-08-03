import React from "react";
import { Link } from "react-router-dom";
import deact from "../assets/artisant.svg";

function Login() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#F7F8FA",
        }}
      >
        <img src={deact} style={{ width: 130, height: 130 }} alt="" />
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            padding: 40,
          }}
        >
          <p
            style={{
              paddingTop: 10,
              textAlign: "center",
              color: "#0C0C0C",
              fontFamily: "Inter",
              fontSize: 20,
              fontWeight: "700",
              letterSpacing: 0.8,
              wordWrap: "break-word",
            }}
          >
            Log in
          </p>
          <div className="mb-3 paddingTop:10">
            <input
              style={{ paddingRight: 40 }}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-3 paddingTop:10">
            <input
              style={{ paddingRight: 80 }}
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Password"
            />
          </div>
          <p
            style={{
              textAlign: "start",
              paddingTop: 10,
              color: "#395EE3",
              fontSize: 12,
            }}
          >
            Forgot password?
          </p>
          <button type="button" className="btn btn-secondary">
            <Link
              style={{ textDecoration: "none", color: "whitesmoke" }}
              to="/Home"
            >
              Login
            </Link>
          </button>
          <p
            style={{
              textAlign: "center",
              paddingTop: 10,
              fontSize: 10,
              color: "black",
            }}
          >
            OR
          </p>
          <button
            style={{ border: "1px solid grey", padding: 10 }}
            type="button"
            className="btn btn-light"
          >
            <img
              src="./google.png"
              style={{ width: 20, height: 20, marginRight: 10 }}
              alt=""
            />
            Continue with Google
          </button>
        </div>
        <p
          style={{
            fontSize: 10,
            textAlign: "center",
            marginTop: 10,
            color: "GrayText",
          }}
        >
          Don't have an account?<span style={{ color: "blue" }}> Sign up</span>
        </p>
      </div>
    </>
  );
}

export default Login;
