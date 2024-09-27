interface Props {
  calculate: (s: string) => void;
}

const UserInput = ({ calculate }: Props) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial investment</label>
          <input
            type="number"
            id="initial-investment"
            min="0"
            onChange={(e) => calculate(e.currentTarget.value)}
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual investment</label>
          <input type="number" id="annual-investment" min="0" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected return</label>
          <input type="number" id="expected-return" min="0" />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input type="number" id="duration" min="0" />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
