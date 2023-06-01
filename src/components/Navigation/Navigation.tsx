import boy from "../../assets/boy.svg";
import { Header, Nav, FormInput } from "./Navigation.styled";
import { Link } from "react-router-dom";

import Example from "../../components/PopUp/PopUp";

const Navigation = () => {
  return (
    <Header>
      <Nav>
        {/* <Link to="/"> */}
          <img
            onClick={() => {
              return <Example />;
            }}
            src={boy}
            alt="me"
          />
        {/* </Link> */}
        <FormInput type="text" placeholder="Enter Name for search" />
      </Nav>
    </Header>
  );
};

export default Navigation;
