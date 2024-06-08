import React, { useState, useEffect } from "react";
import '../Container.css'
function Container() {
  const [loan, setLoan] = useState(0);
  const [interest, setInterest] = useState(0);
  const [term, setTerm] = useState(0);
  const [monthly, setMonthly] = useState("Invalid");
  const [showDisplay, setShowDisplay] = useState(false);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalIntrest, setTotalInterest] = useState(0);

  useEffect(() => {
    let totalPayment = (loan * (1 + interest * term)).toFixed(2);
    let totalInterest = (totalPayment - loan).toFixed(2);
    let monthlyPayment = (loan * (1 + interest * term)) / 12;
    setMonthly(monthlyPayment.toFixed(2));
    setTotalInterest(totalInterest);
    setTotalPayment(totalPayment);
  }, [loan, interest, term, showDisplay]);

  const handleChange = (event, setter) => {
    setter(event.target.value);
  };

  const handleInterestChange = (event) => {
    setInterest(event.target.value / 100);
  };

  const display = () => {
    setShowDisplay(!showDisplay);
  };

  return (
    <>
   
      <div id="body">
        <input
          type="number"
          name="loanAmount"
          onChange={(event) => handleChange(event, setLoan)}
          placeholder="Loan Amount"
        />
        <input
          type="number"
          name="interestRate"
          onChange={handleInterestChange}
          placeholder="Annual Interest Rate"
        />
        <input
          type="number"
          name="loanTerm"
          onChange={(event) => handleChange(event, setTerm)}
          placeholder="Term in Years"
        />

        <div>
          {" "}
          <button onClick={display}>
            {showDisplay ? "Hide" : "Show"}
          </button>{" "}
        </div>
      </div>

      <div id="display">
        {showDisplay &&
          (isNaN(monthly) ? (
            <h1>Invalid Fields</h1>
          ) : monthly <= 0 ? (
            <h1>Invalid Fields</h1>
          ) : (
            <ul>
              <li>
                <h1>Monthly Payment is {monthly}</h1>
              </li>
              <li>
                <h1>Total Payment is {totalPayment}</h1>
              </li>
              <li>
                <h1>Total Interest is {totalIntrest}</h1>
              </li>
            </ul>
          ))}
      </div>
      
    </>
  );
}

export default Container;
