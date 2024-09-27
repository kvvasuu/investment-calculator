import Logo from "../assets/investment-calculator-logo.png";

interface Props {
  children: string;
}

const Header = ({ children }: Props) => {
  return (
    <div id="header">
      <img src={Logo} alt="Logo" />
      <h1>{children}</h1>
    </div>
  );
};

export default Header;
