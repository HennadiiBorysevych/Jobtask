import { IUserFollow } from "./types/types";

const BaseURL = "https://64788697362560649a2df4cf.mockapi.io";

export class Users {
  public page;

  constructor() {
    this.page = 1;
  }

  usersData = async () => {
    try {
      const params = new URLSearchParams({
        page: String(this.page),
        limit: "3",
      });
      const res = await fetch(`${BaseURL}/folowers/users?${params}`);
      return await res.json();
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  followUser = async (user: IUserFollow, id: number) => {
    try {
      const res = await fetch(`${BaseURL}/folowers/users/${id}`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await res.json();
    } catch (error) {
      throw new Error(`${error}`);
    }
  };
  getUser = async (id: string) => {
    const res = await fetch(`${BaseURL}/folowers/users/${id}`);
    return await res.json();
  };
  getAllUsers = async () => {
    try {
      const res = await fetch(`${BaseURL}/folowers/users`);
      return await res.json();
    } catch (error) {
      throw new Error(`${error}`);
    }
  };
  set nextPage(newPage: number) {
    this.page = newPage;
  }
}
