import React, { useState } from "react";
import { ReactDOM } from "react-dom";
import { YupComp } from "./YupComp";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { Row } from "react-bootstrap";

const Login = () => {
  const [data, setData] = useState([]);

  return (
    <>
      <Formik
        validationSchema={YupComp}
        initialValues={{
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          password: "",
          gender: "",
          date: "",
          city: "",
          about: "",
        }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));

          const rcds = [...data];

          rcds.push(values);
          setData(rcds);
          // action.resetForm();
        }}
      >
        <div className="container contact_div pt-5 pb-5 bg-light">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <h1 className="stu">Formik Table</h1>

              <Form>
                <div className="mb-3">
                  <label htmlFor="firstName">First Name:</label>
                  <Field
                    name="firstName"
                    id="firstName"
                    type="text"
                    className="form-control"
                  />
                  <ErrorMessage name="firstName" />
                </div>

                <div className="mb-3">
                  <label htmlFor="lastName">Last Name:</label>
                  <Field
                    name="lastName"
                    id="lastName"
                    type="text"
                    className="form-control"
                  />
                  <ErrorMessage name="lastName" />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone">Phone No:</label>
                  <Field
                    name="phone"
                    id="phone"
                    type="number"
                    className="form-control"
                  />
                  <ErrorMessage name="phone" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email Address:</label>
                  <Field
                    name="email"
                    id="email"
                    type="email"
                    className="form-control"
                  />
                  <ErrorMessage name="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone">Password:</label>
                  <Field
                    name="password"
                    id="phone"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage name="password" />
                </div>

                <div className="mb-3">
                  <label>Gender:</label>
                  <br />
                  <label>Male:</label>
                  <Field name="gender" value="male" type="radio" />

                  <label>Female:</label>
                  <Field name="gender" value="female" type="radio" />
                  <ErrorMessage name="gender" />
                </div>

                <div className="mb-3">
                  <label htmlFor="date">Date:</label>
                  <Field name="date" type="date" className="form-control" />
                  <ErrorMessage name="date" />
                </div>

                <div className="mb-3">
                  <label>City:</label>
                  <Field name="city" as="select">
                    <option value="ct">---city----</option>
                    <option value="noida">Noida</option>
                    <option value="delhi">Delhi</option>
                    <option value="london">London</option>
                  </Field>
                  <ErrorMessage name="city" />
                </div>
                <div className="mb-3">
                  <label htmlFor="about">About:</label>
                  <Field name="about" id="about" as="textarea" />
                  <ErrorMessage name="about" />
                  <br />
                </div>
                <button type="submit">Submit</button>
              </Form>
              <hr />
              {data.firstName}
              <table className="table">
                <tbody>
                  {data.map((row, i) => {
                    return (
                      <tr key={i}>
                        <td>{row.firstName}</td>
                        <td>{row.lastName}</td>
                        <td>{row.phone}</td>
                        <td>{row.email}</td>
                        <td>{row.password}</td>
                        <td>{row.gender}</td>
                        <td>{row.date}</td>
                        <td>{row.city}</td>
                        <td>{row.about}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
};
export default Login;
