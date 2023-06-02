import styled from "@emotion/styled";

export const Card = styled.li`
  width: 343px;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding: 28px 36px;
`;

export const Line = styled.img`
  position: absolute;

  top: 44%;
  left: -125px;
`;
export const UserPic = styled.img`
  position: relative;
  z-index: 10;
  border-radius: 50%;
`;
export const ImageWrapper = styled.div`
  position: relative;
`;
export const Button = styled.button`
  width: 196px;
  display: block;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  outline: none;
  margin-top: 10px;
  border: none;
`;
export const UserInfo = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #ebd8ff;
`;
