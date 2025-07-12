import React, { useState } from "react";
import "../Css/ContextForm.css";
import numberCodeDb from "../NumberCountry";
import { ToastContainer, toast } from "react-toastify";
import SelectCategory from "../component/SelectCategory";
import ImageFile from "./ImageFile";
import { useEdit } from "../Usecontext/Usecontext";

function ContextForm() {
  const {
    formValues,

    setFormValues,
    submissions,
    setSubmissions,
    showErrors,
    setErrors,
    handleSubmit,
    handleChange,
    ErrorMessage,
  } = useEdit();

  return (
    <div className="catt2">
      <div className="container">
        <form className="quote-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            placeholder="Full Name*"
          />
          {showErrors && formValues.name === "" && (
            <ErrorMessage message="Name is required" />
          )}

          <div className="mobile-input">
            <select>
              {numberCodeDb.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.code} ({item.phone})
                </option>
              ))}
            </select>
            <input
              type="text"
              name="phone"
              value={formValues.phone}
              onChange={(e) => {
                const sanitized = e.target.value
                  .replace(/\D/g, "")
                  .slice(0, 10);
                setFormValues((prev) => ({ ...prev, phone: sanitized }));
              }}
              placeholder="Mobile Number*"
            />
          </div>
          {showErrors && formValues.phone === "" && (
            <ErrorMessage message="Phone is required" />
          )}

          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Email Address*"
          />
          {showErrors &&
            formValues.email !== "" &&
            !isValidEmail(formValues.email) && (
              <ErrorMessage message="Invalid Email" />
            )}

          {/* <select
            name="category"
            value={formValues.category}
            onChange={handleChange}
          >
            <option value="">-- Select Category --</option>
            <option value="pipes">Pipes</option>
            <option value="tubes">Tubes</option>
            <option value="fittings">Fittings</option>
          </select>
          {showErrors && formValues.category === "" && (
            <ErrorMessage message="Category is required" />
          )} */}
          <SelectCategory value={formValues.category} onChange={handleChange} />

          <textarea
            name="message"
            value={formValues.message}
            onChange={handleChange}
            placeholder="Write Requirement or brief..."
            maxLength={1000}
          />
          {showErrors && formValues.message === "" && (
            <ErrorMessage message="Message is required" />
          )}

          {/* <input
            type="file"
            name="file"
            accept=".pdf,.doc,.docx,.jpg,.png"
            onChange={handleChange}
          /> */}
          <ImageFile value={formValues.file} onChange={handleChange} />

          <div className="captcha-box">
            <label style={{ color: "black" }}>What is 1 + 2?</label>
            <input
              type="text"
              name="captcha"
              value={formValues.captcha}
              onChange={handleChange}
              placeholder="Enter your answer*"
            />
          </div>
          {showErrors && formValues.captcha === "" && (
            <ErrorMessage message="Captcha is required" />
          )}

          <button type="submit">Send inquiry</button>
          <ToastContainer />
        </form>
        {/* {submissions.length > 0 && (
  <div className="submission-table">
    <h2>Submitted Entries</h2>
    <table border="1">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Category</th>
          <th>Message</th>
          <th>File</th>
          <th>Captcha</th>
        </tr>
      </thead>
      <tbody>
        {submissions.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.category}</td>
            <td>{item.message}</td>
            <td>{item.file?.name || item.file || "No File"}</td>
            <td>{item.captcha}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)} */}

        <br/>
      </div>
    </div>
  );
}

export default ContextForm;
