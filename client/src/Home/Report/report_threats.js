import React from "react";
import ReportThreatsHeader from "./report_threats_header";
import ReportThreatsForm from "./report_threats_form";
import "./Report-Threats.css"

class ReportThreats extends React.Component {
  render() {
    return (
      <div className="report-body">
        <div className="report-card">
          <ReportThreatsHeader />
          <ReportThreatsForm />
        </div>
      </div>
    );
  }
}

export default ReportThreats;
