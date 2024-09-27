import Header from "./components/Header.tsx";
import UserInput from "./components/UserInput.tsx";

function App() {
  return (
    <>
      <Header>Investment calculator</Header>
      <UserInput calculate={(e) => console.log(e)}></UserInput>
    </>
  );
}

export default App;
