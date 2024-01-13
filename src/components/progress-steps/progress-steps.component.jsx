import React, { Fragment, useState, useRef, useEffect } from "react";
import "./progress-steps.styles.scss";

const ProgressSteps = () => {
    // const circles = Array.from(document.getElementsByClassName("circle"));
    const [isActive, setActive] = useState(false);
  const [progress, setProgress] = useState(1);
  const [isIncrementing, setIsIncrementing] = useState(true);
  const [initialWidth, setInitialWidth] = useState(20);
  const circles = document.getElementsByClassName("circle");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const currentActive = 1;


  const changeWidth = () => {
    setActive = true;
    console.log(initialWidth);
    console.log(isIncrementing);
    if (isIncrementing) setInitialWidth((oldWidth) => oldWidth + 20);
    else setInitialWidth((oldWidth) => oldWidth - 20);
    if (isIncrementing && initialWidth + 20 === 100) setIsIncrementing(false);
    if (!isIncrementing && initialWidth - 20 === 0) setIsIncrementing(true);
  };
  const previous = () => {
    console.log("previous");
  };
  const toggleClass = () => {
    setActive(!isActive);
    console.log(isActive);
  };

  const nextClick = () => {
    console.log('next click');
    setActive(!isActive);

    // currentActive++;

    // if (currentActive > circles.length) {
    //   currentActive = circles.length;
    // }

    update();
  }
  const prevClick = () => {
    console.log('previous click');
    setActive(!isActive);

    // currentActive--;

    // if (currentActive < 1) {
    //   currentActive = 1;
    // }

    update();
  }

  const update = () => {
    console.log('update click');
    console.log(circles.length);
    console.log('after circles');
    for (let idx of circles) {
        idx++
        console.log(circles[idx]);
    }
    // circles.map((circle, idx) => {
    //     if(idx< currentActive){
    //         console.log(idx);
    //         console.log('idx < currentActive');
    //             } else {
    //                 console.log(idx);
    //                 console.log('else');
    //             }
    // })


    // const actives = document.querySelectorAll('.active')

    // progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    // if(currentActive === 1) {
    //     prev.disabled = true
    // } else if(currentActive === circles.length) {
    //     next.disabled = true
    // } else {
    //     prev.disabled = false
    //     next.disabled = false
    // }
  };

  return (
    <div className="container">
      <h1>Progress Steps</h1>

      <div className="progress-container">
        <div className="progress" id="progress"></div>
        <div className="circle active">1</div>
        <div className="circle">2</div>
        <div className="circle">3</div>
        <div className="circle">4</div>
      </div>

      <button className="btn" id="prev" disabled onClick={prevClick}>
        Prev
      </button>
      <button className="btn" id="next" onClick={nextClick}>
        Next
      </button>
    </div>
  );
};
export default ProgressSteps;
