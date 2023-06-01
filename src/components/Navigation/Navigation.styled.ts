import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  width: 1280px;
`;
export const Nav = styled.nav`
  display:flex;
  width:100%;
  align-items: center;
  padding: 10px;
  justify-content: space-between;

`
export const FormInput = styled.input`
  font-size: 16px;
  display: block;
  font-family: 'Rubik', sans-serif;
  width: 30%;
  color: #777;
  padding: 10px 1px;
  border: 0;
  border-bottom: 2px solid #4b2a99;
  outline: none;
  transition: all 0.2s;
  &::placeholder {
    text-transform: uppercase;
  }
`;