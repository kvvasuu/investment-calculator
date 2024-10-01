import { Arguments } from "../util/investment";

import CustomInput from "./CustomInput";

interface Props {
  calculate: (valueName: string, value: number) => void;
  inputs: Arguments;
}

const UserInput = ({ calculate, inputs }: Props) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <CustomInput
          labelFor="initial-investment"
          label="Initial investment"
          id="initial-investment"
          value={inputs.initialInvestment}
          onChange={(e) =>
            calculate("initialInvestment", Number(e.currentTarget.value))
          }
        ></CustomInput>
        <CustomInput
          labelFor="annual-investment"
          label="Annual investment"
          id="annual-investment"
          value={inputs.annualInvestment}
          onChange={(e) =>
            calculate("annualInvestment", Number(e.currentTarget.value))
          }
        ></CustomInput>
      </div>
      <div className="input-group">
        <CustomInput
          labelFor="expected-return"
          label="Expected return"
          id="expected-return"
          value={inputs.expectedReturn}
          onChange={(e) =>
            calculate("expectedReturn", Number(e.currentTarget.value))
          }
        ></CustomInput>
        <CustomInput
          labelFor="duration"
          label="Duration"
          id="duration"
          value={inputs.duration}
          onChange={(e) => calculate("duration", Number(e.currentTarget.value))}
        ></CustomInput>
      </div>
    </section>
  );
};

export default UserInput;
