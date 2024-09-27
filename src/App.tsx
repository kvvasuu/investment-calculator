import { useState } from "react";
import Header from "./components/Header.tsx";
import UserInput from "./components/UserInput.tsx";
import ResultList from "./components/ResultList.tsx";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const calculateInputs = (valueName: string, value: number) => {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [valueName]: value,
      };
    });
  };

  return (
    <>
      <Header>Investment calculator</Header>
      <UserInput inputs={inputs} calculate={calculateInputs}></UserInput>
      <ResultList inputs={inputs} />
    </>
  );
}

export default App;
