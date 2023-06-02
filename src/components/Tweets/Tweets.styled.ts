import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NameWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
export const TweetsList = styled.ul`
  list-style: none;
  text-align: left;
  display: flex;
  flex-direction: column;

  gap: 20px;
`;
export const Content = styled.p`
  font-size: 30px;
`;

export const Button = styled(Link)`
  width: 196px;
  background: #ebd8ff;
  display: block;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  padding: 14px 10px;
  text-transform: uppercase;
  color: #373737;
  outline: none;
  margin-top: 10px;
  border: none;
  margin-bottom: 30px;
  position: absolute;
  right: 50px;
  top: -118px;


  width: 150px;
`;
