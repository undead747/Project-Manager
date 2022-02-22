import React, { Component } from "react";
import Button from "../DumbComponents/Button/Button";
import Title from "../DumbComponents/Tittle/Title";
import "./edit-form.css";

export default class Form extends Component {
  render() {
    return (
      <div className="form">
        <Title titles={["Project Manager", "add"]} />

        <div className="container mt-md-5">
          <div className="row">
              <div className="col-lg-8 mt-3 mt-lg-0 ps-0 pe-0 ps-md-3 pe-md-3 form__content">
                  <div className="row mb-2 mb-md-4 align-items-center">
                    <label
                      htmlFor="project-name"
                      className="col-md-2 col-form-label h6"
                    >
                      Project
                    </label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="project-name"
                      />
                    </div>
                  </div>

                  <div className="row">
                      <div className="mb-2 mb-md-4 col-md-6 align-items-center">
                        <div className="row">
                          <label htmlFor="category" className="col-md-4 col-form-label h6">
                            Category
                          </label>
                          <div className="col-md-8">
                            <select defaultValue={"0"} className="form-select form-select-sm" aria-label="Default select">
                              <option value="0">Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
                  
                      <div className="mb-2 mb-md-4 col-md-6 align-items-center">
                        <div className="row">
                          <label htmlFor="status" className="col-md-4 col-form-label h6">
                            Status
                          </label>
                          <div className="col-md-8">
                            <select defaultValue={"0"} className="form-select form-select-sm" aria-label="Default select">
                              <option value="0">Open this select menu</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
                  </div> 

                  <div className="row">
                      <div className="mb-2 mb-md-4 col-md-6 align-items-center">
                        <div className="row">
                            <label htmlFor="start-date" className="col-md-4 col-form-label h6">
                              Start date
                            </label>
                            <div className="col-md-8">
                              <input
                                type="date"
                                className="form-control form-control-sm"
                                id="start-date"
                              />
                            </div>
                        </div>
                      </div>
                 
                      <div className="mb-2 mb-md-4 col-md-6 align-items-center">
                        <div className="row">
                            <label htmlFor="start-date" className="col-md-4 col-form-label h6">
                              Start date
                            </label>
                            <div className="col-md-8">
                              <input
                                type="date"
                                className="form-control form-control-sm"
                                id="start-date"
                              />
                            </div>
                        </div>
                      </div>
                  </div> 

                  <div className="row mb-4 mb-md-5 align-items-center">
                    <label htmlFor="description" className="col-md-2 col-form-label h6">
                      Description
                    </label>
                    <div className="col-md-10">
                      <textarea
                        className="form-control"
                        id="description"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
              </div>

            <div className="col-md-12 col-lg-4 ps-0 pe-0">
              <div className="row justify-content-center">
                <div className="col col-md-3 col-lg-8 form__btn">
                  <Button title="Publish" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
