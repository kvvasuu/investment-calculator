/* interface Props {
  children: string;
} */

const UserInput = (/* {}: Props */) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <label htmlFor="initial-investment">Initial investment</label>
        <input type="number" id="initial-investment" />
        <label htmlFor="annual-investment">Annual investment</label>
        <input type="number" id="annual-investment" />
      </div>
      <div className="input-group">
        <label htmlFor="expected-return">Expected return</label>
        <input type="number" id="expected-return" />
        <label htmlFor="duration">Duration</label>
        <input type="number" id="duration" />
      </div>
    </div>
  );
};

export default UserInput;
