import React, { Fragment, useState } from "react";
import Calculator from "../../components/Calculator/Calculator.component";
import ProgressSteps from "../../components/progress-steps/progress-steps.component";
import "./ProjectsPage.styles.scss";

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      {isActive ? (
        <div>
          <p>{children}</p>
          <button onClick={() => setIsActive(false)}>Hide {title}</button>
        </div>
      ) : (
        <button onClick={() => setIsActive(true)}>Show {title}</button>
      )}
    </section>
  );
}

const ProjectsPage = ({ children }) => {
  return (
    <div>
      <h1>This is my Projects Page</h1>
      <div class="feature">
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
