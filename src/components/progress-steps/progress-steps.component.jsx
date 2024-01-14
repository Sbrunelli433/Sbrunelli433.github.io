import React, { useState } from 'react';
import './progress-steps.styles.scss';

const ProgressSteps = () => {
   const [currentActive, setCurrentActive] = useState(1)
   const circles = [1, 2, 3, 4, 5]

   const next = () => {
       setCurrentActive(currentActive + 1)

       if(currentActive >= circles.length) {
           setCurrentActive(circles.length)
       }
   }

   const prev = () => {
       setCurrentActive(currentActive - 1)

       if(currentActive <= 1) {
           setCurrentActive(1)
       }
   }

   const update = () => {
       const actives = circles.filter((_, idx) => idx < currentActive)
       console.log(actives);

       return (
          <div className="progress" id='progress' style={{ width: (actives.length - 1) / (circles.length - 1) * 100 + '%' }}></div>
       )
   }

   return (
       <div className='container'>
           <div className="progress-container">
           {update()}
               {circles.map((circle, idx) => (
                   <div key={idx} className={`circle ${idx < currentActive ? 'active' : ''}`}>{idx}</div>
               ))}
           </div>
           <button className='btn' onClick={prev} disabled={currentActive === 1}>Prev</button>
           <button className='btn' onClick={next} disabled={currentActive === circles.length}>Next</button>
       </div>
   )
}

export default ProgressSteps;