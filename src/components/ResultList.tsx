import {
  Arguments,
  formatter,
  calculateInvestmentResults,
} from "../util/investment";

import { styled } from "styled-components";

const Table = styled.section`
  max-width: 50rem;
  margin: 2rem auto;
  padding: 1rem;
  table-layout: fixed;
  border-spacing: 1rem;
  text-align: right;
  & thead {
    font-size: 0.7rem;
    color: #83e6c0;
  }
  & tbody {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 0.85rem;
    color: #c2e9e0;
  }
  & tr {
    height: 2rem;
  }
  & td {
    padding: 0 1rem;
  }
`;

interface Props {
  inputs: Arguments;
}

const ResultList = ({ inputs }: Props) => {
  if (inputs.duration < 1) {
    return (
      <Table>
        <p className="center">Please enter a duration greater than zero.</p>
      </Table>
    );
  }

  const results = calculateInvestmentResults(inputs);

  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <Table>
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
    </Table>
  );
};

export default ResultList;
