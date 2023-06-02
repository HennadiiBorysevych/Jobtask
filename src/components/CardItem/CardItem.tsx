import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Line,
  UserPic,
  ImageWrapper,
  Button,
  UserInfo,
} from "./CardItem.styled";

import { IUser } from "../../types/types";
import { addCommaToNumber } from "../../utils/utils";

import main from "../../assets/main.svg";
import line from "../../assets/line.svg";

import { Users } from "../../API";

const usersData = new Users();

const CardItem = ({ avatar, user, followers, tweets, id }: IUser) => {
  const [follow, setFollow] = useState<boolean>(() => {
    const storedFollow = localStorage.getItem(`follow_${id}`);
    return storedFollow !== null ? JSON.parse(storedFollow) : false;
  });
  const [updatedFollowers, setUpdatedFollowers] = useState<number>(followers);
  const [newCard, setNewCard] = useState<IUser | null>(null);

  useEffect(() => {
    localStorage.setItem(`follow_${id}`, JSON.stringify(follow));
  }, [follow, id, updatedFollowers]);

  const handleFollowButtonClick = async () => {
    try {
      const updatedFollowersCount = follow
        ? updatedFollowers - 1
        : updatedFollowers + 1;
      setFollow(!follow);
      setUpdatedFollowers(updatedFollowersCount);

      await usersData
        .followUser(
          {
            avatar,
            user,
            followers: updatedFollowersCount,
            tweets,
          },
          id
        )
        .then(setNewCard);
    } catch (error) {
      throw new Error(`${error}`);
    }
  };
  return (
    <Card>
      <img src={main} alt="main" />
      <ImageWrapper>
        <UserPic
          src={newCard?.avatar ? newCard?.avatar : avatar}
          alt="user-image"
        />
        <Line src={line} alt="line" />
      </ImageWrapper>
      <UserInfo>{newCard?.user ? newCard?.user : user}</UserInfo>
      <Link to={`/tweets/${id}`}>
        <UserInfo>{newCard?.tweets ? newCard?.tweets : tweets} tweets</UserInfo>
      </Link>
      <UserInfo>
        {newCard?.followers
          ? addCommaToNumber(newCard?.followers)
          : addCommaToNumber(followers)}{" "}
        Followers
      </UserInfo>

      <Button
        style={{
          backgroundColor: !follow ? "#ebd8ff" : "#5CD3A8",
          padding: !follow ? "14px 56px" : "14px 39px",
        }}
        onClick={handleFollowButtonClick}
      >
        {!follow ? "follow" : "following"}
      </Button>
    </Card>
  );
};

export default CardItem;
