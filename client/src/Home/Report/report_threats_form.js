import React from "react";

class ReportThreatsForm extends React.Component {
  render() {
    return (
      <div className="report-form">
        <form action="#">
          <div className="form-group">
            <label htmlFor="message" className="form-font">
              MESSAGE
            </label>
            <textarea
              className="form-control"
              id="message"
              style={{
                minHeight: "300px"
              }}
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-font">
              EMAIL
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="name" className="form-font">
                NAME
              </label>
              <input
                id="name"
                className="form-control"
                type="text"
                name="name"
              />
            </div>
            <div
              className="form-group col-md-6"
              style={{
                marginBottom: "3%"
              }}
            >
              <label htmlFor="phone" className="form-font">
                PHONE NUMBER
              </label>
              <input
                id="phone"
                className="form-control"
                type="tel"
                name="phone"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-danger btn-block">
            SEND
          </button>
        </form>
      </div>
    );
  }
}

export default ReportThreatsForm;
