import React, { Fragment, useState } from "react";

import "./Calculator.styles.scss";

function Calculator() {
  const [data, setData] = useState("");
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "."].forEach((item) => {
    calcBtns.push(
      <button
        onClick={(e) => {
          setData(data + e.target.value);
        }}
        value={item}
        key={item}
      >
        {item}
      </button>
    );
  });

  return (
    <Fragment>
      <h1>Basic Calculator</h1>
      <div className="calculator">
        <div className="calculator-display">
          <h1>{data}</h1>
        </div>
        <div className="calculator-buttons">
          <button
            className="operator"
            onClick={(e) => setData(data + e.target.value)}
            value="+"
          >
            +
          </button>
          <button
            className="operator"
            onClick={(e) => setData(data + e.target.value)}
            value="-"
          >
            -
          </button>
          <button
            className="operator"
            onClick={(e) => setData(data + e.target.value)}
            value="*"
          >
            *
          </button>
          <button
            className="operator"
            onClick={(e) => setData(data + e.target.value)}
            value="/"
          >
            /
          </button>
          {calcBtns}
          <button
            className="equal-sign"
            onClick={(e) => {
              try {
                setData(
                  String(eval(data)).length > 3 &&
                    String(eval(data)).includes(".")
                    ? String(eval(data).toFixed(4))
                    : String(eval(data))
                );
              } catch (err) {
                console.log(err);
              }
            }}
            value="="
          >
            =
          </button>

          <button className="clear" onClick={() => setData("")}>
            AC
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Calculator;
