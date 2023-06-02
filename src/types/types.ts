export type IUser = {
  avatar: string;
  followers: number;
  id: number;
  tweets: number;
  user: string;
};
export type IUserFollow = {
  avatar: string;
  followers: number;
  tweets: number;
  user: string;
};
export type IPost = {
  date: Date;
  text: string;
};