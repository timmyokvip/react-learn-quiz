import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

const Language = (props) => {
  return (
    <>
      {" "}
      <NavDropdown
        title="Việt Nam"
        id="basic-nav-dropdown2"
        className="languages"
      >
        <NavDropdown.Item>Engligh</NavDropdown.Item>
        <NavDropdown.Item>Việt Nam</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default Language;
