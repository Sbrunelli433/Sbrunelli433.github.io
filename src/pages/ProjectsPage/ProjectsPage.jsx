import React, { Fragment, useState } from "react";
import Calculator from "../../components/Calculator/Calculator.component";
import ProgressSteps from "../../components/progress-steps/progress-steps.component";
import "./ProjectsPage.styles.scss";

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="component">
      {isActive ? (
        <Fragment>
          <div>{children}</div>
          <button className="hide-btn" onClick={() => setIsActive(false)}>Hide {title}</button>
        </Fragment>
      ) : (
        <button onClick={() => setIsActive(true)}>Show {title}</button>
      )}
    </div>
  );
}

const ProjectsPage = ({ children }) => {
  return (
    <div>
      <h1>This is my Projects Page</h1>
      <div className="feature">
        <Panel title="Calculator">
          <Calculator />
        </Panel>
        <Panel title="Progress Steps">
          <ProgressSteps />
        </Panel>
      </div>
    </div>
  );
};

export default ProjectsPage;
