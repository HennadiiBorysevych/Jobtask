import { useState, useEffect } from "react";
import { ProgressBar } from "react-loader-spinner";
import { IUser } from "../../types/types";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Users } from "../../API";
import { UsersList, LoadMoreButton, NoUsers } from "./CardList.styled";

import CardItem from "../CardItem/CardItem";

const usersData = new Users();

const CardList = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isDataLoading, setIsDataLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>("show all");
  const [totalUsers, setTotalUsers] = useState<number>(0);

  useEffect(() => {
    const getAllUsersCount = async () => {
      const usersCount = await usersData.getAllUsers();
      setTotalUsers(usersCount.length);
    };
    getAllUsersCount();
  }, []);

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
        setIsDataLoading(false);
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

  const handleUsersFilter = () => {
    switch (filter) {
      case "show all":
        return users;
      case "follow":
        return users.filter((user) => {
          const storedFollow = localStorage.getItem(`follow_${user.id}`);
          return storedFollow === "false";
        });
      case "followings":
        return users.filter((user) => {
          const storedFollow = localStorage.getItem(`follow_${user.id}`);
          return storedFollow === "true";
        });
      default:
        return users;
    }
  };

  return (
    <>
      {isLoading || isDataLoading ? (
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
          <FormControl style={{ marginBottom: 30, marginLeft: 1100 }}>
            <InputLabel>Users</InputLabel>
            <Select
              value={filter}
              label="users"
              onChange={(e) => setFilter(e.target.value)}
            >
              <MenuItem value="show all">Show All</MenuItem>
              <MenuItem value="follow">Follow</MenuItem>
              <MenuItem value="followings">Followings</MenuItem>
            </Select>
          </FormControl>
          <UsersList>
            {handleUsersFilter().length === 0 ? (
              <NoUsers>No users found 😔</NoUsers>
            ) : (
              handleUsersFilter().map((user) => (
                <CardItem key={user.id} {...user} />
              ))
            )}
          </UsersList>
          {filter === "followings" ? null : (
            <LoadMoreButton
              onClick={() => setPage((prev) => prev + 1)}
              style={{
                margin: "20px auto",
                width: 220,
                display:
                  handleUsersFilter().length === 0 ||
                  totalUsers === users.length
                    ? "none"
                    : "block",
              }}
            >
              Load More
            </LoadMoreButton>
          )}
        </>
      )}
    </>
  );
};

export default CardList;
