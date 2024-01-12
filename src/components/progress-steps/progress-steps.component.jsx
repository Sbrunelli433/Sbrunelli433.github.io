import React, { Fragment, useState } from "react";


const ProgressSteps = () => {
    return (
        <div class="container">
        <div class="progress-container">
          <div class="progress" id="progress"></div>
          <div class="circle active">1</div>
          <div class="circle">2</div>
          <div class="circle">3</div>
          <div class="circle">4</div>
        </div>
  
        <button class="btn" id="prev" disabled>Prev</button>
        <button class="btn" id="next">Next</button>
      </div>
    );
}
export default ProgressSteps;