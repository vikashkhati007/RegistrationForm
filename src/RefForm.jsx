import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

export default function RefForm() {
  const logincontainer = {
    width: "350px",
    height: "400px",
    backgroundColor: "#1D1CE5",
    margin: "0px auto",
    borderRadius: "10px",
    boxShadow: "0px 4px 4px 4px rgba(0,0,0,0.7)"
  };
  const title = {
    padding: "20px",
    textAlign: "center",
    color: "white"
  };
  const regcontainer = {
    display: "grid",
    margin: "20px 20px"
  };
  const inputStyle = {
    height: "30px",
    border: "none",
    border: "1.5px solid black",
    borderRadius: "5px",
    paddingLeft: "5px"
  };

  const buttonContainer = {
    padding: "30px",
    display: "flex",
    justifyContent: "center"
  };

  const Inputhandle = useRef(null);
  const Emailhandle = useRef(null);
  const Passwordhandle = useRef(null);

  useEffect(() => {
    Inputhandle.current.focus();
  }, []);

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [state, setState] = useState(false);
  const [value, setValue] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.username) {
      Inputhandle.current.focus();
    } else if (!values.email) {
      Emailhandle.current.focus();
    } else if (!values.password) {
      Passwordhandle.current.focus();
    }
    setValue(true);
    if (values.username && values.email && values.password) {
      setState(true);
    }
  }

  function inputNamevalue(e) {
    setValues({ ...values, username: e.target.value });
  }
  function inputEmailvalue(e) {
    setValues({ ...values, email: e.target.value });
  }

  function inputPasswordvalue(e) {
    setValues({ ...values, password: e.target.value });
  }
  return (
    <div>
      {value && state ? (
        <div className="success-alert">
          <p>You have successfully logged in!</p>
        </div>
      ) : (
        <div style={logincontainer}>
          <form onSubmit={handleSubmit}>
            <div>
              <h1 style={title} className="title">
                Registration - Form
              </h1>
            </div>
            <div style={regcontainer}>
              <input
                ref={Inputhandle}
                type="text"
                placeholder="Enter Your Name"
                style={inputStyle}
                onChange={inputNamevalue}
                value={values.username}
              />
              {value && !values.username ? (
                <label> enter valid name</label>
              ) : null}
            </div>
            <div style={regcontainer}>
              <input
                ref={Emailhandle}
                type="email"
                placeholder="Enter Your Email"
                style={inputStyle}
                onChange={inputEmailvalue}
                value={values.email}
              />
              {value && !values.email ? (
                <label> enter valid email</label>
              ) : null}
            </div>
            <div style={regcontainer}>
              <input
                ref={Passwordhandle}
                type="password"
                placeholder="Enter Your Password"
                style={inputStyle}
                onChange={inputPasswordvalue}
                value={values.password}
              />
              {value && !values.password ? (
                <label> enter valid password</label>
              ) : null}
            </div>
            <div style={buttonContainer}>
              <button className="button-style">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
