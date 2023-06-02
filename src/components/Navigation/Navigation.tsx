import me from "../../assets/me.jpg";
import { Header, Nav } from "./Navigation.styled";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Header>
      <Nav>
        <Link to="/">
          <img
            style={{ width: 80, height: 80, borderRadius: "50%" , position:'absolute'}}
            src={me}
            alt="me"
          />
        </Link>
      </Nav>
    </Header>
  );
};

export default Navigation;
