import { useState, useEffect } from "react";
import { ProgressBar } from "react-loader-spinner";
import { IUser } from "../../types/types";

import { Users } from "../../API";
import { UsersList, LoadMoreButton } from "./CardList.styled";

import Navigation from "../Navigation/Navigation";
import CardItem from "../CardItem/CardItem";

const usersData = new Users();

const CardList = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    usersData.nextPage = page;
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await usersData.usersData();

        setUsers((prevUsers) => [
          ...prevUsers,
          ...data.filter(
            (newUser: IUser) =>
              !prevUsers.some((existingUser) => existingUser.id === newUser.id)
          ),
        ]);
        setLoading(false);
      } catch (error) {
        throw new Error(`${error}`);
      }
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    const scrollToBottom = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    };
    scrollToBottom();
  }, [users]);

  return (
    <>
      {isLoading ? (
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          wrapperClass="progress-bar-wrapper"
          borderColor="#5736a3"
          barColor="#471ca9"
        />
      ) : (
        <>
          <UsersList>
            {users.map((user) => (
              <CardItem key={user.id} {...user} />
            ))}
          </UsersList>
          <LoadMoreButton
            onClick={() => setPage((prev) => prev + 1)}
            style={{ margin: "20px auto", width: 220 }}
          >
            Load More
          </LoadMoreButton>
        </>
      )}
    </>
  );
};

export default CardList;
