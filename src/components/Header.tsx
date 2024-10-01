import Logo from "../assets/investment-calculator-logo.png";

const Header = ({ children }: { children: string }) => {
  return (
    <section id="header">
      <img src={Logo} alt="Logo" />
      <h1>{children}</h1>
    </section>
  );
};

export default Header;
