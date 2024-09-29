import {
  Arguments,
  formatter,
  calculateInvestmentResults,
} from "../util/investment";

import "./ResultList.scss";

interface Props {
  inputs: Arguments;
}

const ResultList = ({ inputs }: Props) => {
  if (inputs.duration < 1) {
    return (
      <section id="result">
        <p className="center">Please enter a duration greater than zero.</p>
      </section>
    );
  }

  const results = calculateInvestmentResults(inputs);

  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <section id="result">
      <table>
        <thead>
          <tr>
            <td>Year</td>
            <td>Investment Value</td>
            <td>Interest (Year)</td>
            <td>Total Interest</td>
            <td>Invested Capital</td>
          </tr>
        </thead>
        <tbody>
          {results.map((row) => {
            const totalInterest =
              row.valueEndOfYear -
              row.annualInvestment * row.year -
              initialInvestment;

            return (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(row.valueEndOfYear - row.interest)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default ResultList;
