import React, { useEffect, useState } from "react";
import "../App.css";
import Table from "./Table";

const Forms = () => {
  const [firstNameValue, setfirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const [submittedForm, setSubmitedForm] = useState([]);
  const handleChange = (e) => {
    if (e.target.id === "idForFirstName") {
      setfirstNameValue(e.target.value);
    }
    if (e.target.id === "idForLastName") {
      setLastNameValue(e.target.value);
    }
    if (e.target.id === "idForNumber") {
      setNumberValue(e.target.value);
    }
    if (e.target.id === "idForEmail") {
      setEmailValue(e.target.value);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();

    let formData = {
      firstNameValue,
      lastNameValue,
      numberValue,
      emailValue,
    };

    if (
      firstNameValue !== "" ||
      lastNameValue !== "" ||
      numberValue !== "" ||
      emailValue !== ""
    ) {
      setSubmitedForm([...submittedForm, formData]);

      let avalData = JSON.parse(localStorage.getItem("data") || "[]");
      avalData.push(formData);

      localStorage.setItem("data", JSON.stringify(avalData));

      setfirstNameValue("");
      setLastNameValue("");
      setNumberValue("");
      setEmailValue("");
      window.location.href = "/list";
    } else return;
  };

  useEffect(() => {
    console.log(submittedForm);
  }, [submittedForm]);

  return (
    <div className="container mt-5 p-5">
      <form onSubmit={formSubmit}>
        <div className="card p-5">
          <h1 className="card-title text-center">Registration Form</h1>
          <div className="d-flex flex-column pt-0 p-5">
            <div className="form-group d-flex flex-column">
              <label className="col-form-label" htmlFor="idForFirstName">
                First Name
              </label>
              <input
                id="idForFirstName"
                className="form-control"
                type="text"
                value={firstNameValue}
                onChange={handleChange}
              />
            </div>
            <div className="form-group d-flex flex-column">
              <label className="col-form-label" htmlFor="idForLastName">
                Last Name
              </label>
              <input
                className="form-control"
                id="idForLastName"
                type="text"
                value={lastNameValue}
                onChange={handleChange}
              />
            </div>
            <div className="form-group d-flex flex-column">
              <label className="col-form-label" htmlFor="idForNumber">
                Mobile Number
              </label>
              <input
                className="form-control"
                id="idForNumber"
                type="text"
                value={numberValue}
                onChange={handleChange}
              />
            </div>
            <div className="form-group d-flex flex-column">
              <label className="col-form-label" htmlFor="idForEmail">
                E-mail ID
              </label>
              <input
                className="form-control"
                id="idForEmail"
                type="email"
                value={emailValue}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary mt-3" type="submit">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Forms;
