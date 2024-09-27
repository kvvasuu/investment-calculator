import { Arguments } from "../util/investment";

interface Props {
  calculate: (valueName: string, value: number) => void;
  inputs: Arguments;
}

const UserInput = ({ calculate, inputs }: Props) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial investment</label>
          <input
            type="number"
            id="initial-investment"
            min="0"
            value={inputs.initialInvestment}
            onChange={(e) =>
              calculate("initialInvestment", Number(e.currentTarget.value))
            }
            required
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual investment</label>
          <input
            type="number"
            id="annual-investment"
            min="0"
            value={inputs.annualInvestment}
            onChange={(e) =>
              calculate("annualInvestment", Number(e.currentTarget.value))
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected return</label>
          <input
            type="number"
            id="expected-return"
            min="0"
            value={inputs.expectedReturn}
            onChange={(e) =>
              calculate("expectedReturn", Number(e.currentTarget.value))
            }
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            min="0"
            value={inputs.duration}
            onChange={(e) =>
              calculate("duration", Number(e.currentTarget.value))
            }
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
