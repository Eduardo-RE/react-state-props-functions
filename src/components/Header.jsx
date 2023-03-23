import Logo from "../images/logo.jpg";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
    </>
  );
};

export default Header;
