import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { NameWrapper, TweetsList, Content, Button } from "./Tweets.styled";
import { useParams } from "react-router-dom";
import { Users } from "../../API";
import { IUser, IPost } from "@/types/types";
import { ProgressBar } from "react-loader-spinner";

import { addCommaToNumber } from "../../utils/utils";

const users = new Users();

const Tweets = () => {
  const [user, setUser] = useState<IUser>();
  const [tweets, setTweets] = useState<IPost[]>([]);
  const [loading, setloading] = useState<boolean>(true);

  const { UserId } = useParams();

  useEffect(() => {
    const getUser = async (UserId: string) => {
      const user = await users.getUser(UserId);
      setUser(user);
    };
    if (typeof UserId === "string") {
      getUser(UserId);
    }
  }, [UserId]);

  useEffect(() => {
    const generateTweets = () => {
      const generatedTweets = [];
      if (user && user.tweets) {
        for (let i = 0; i < user.tweets; i++) {
          const post = {
            date: faker.date.past(),
            text: faker.lorem.sentence(),
          };
          generatedTweets.push(post);
        }
      }
      setTweets(generatedTweets);
    };
    generateTweets();
    setloading(false);
  }, [user]);

  return (
    <section style={{ position: "relative", marginTop: 114 }}>
      <Button to="/">Back to Home</Button>
      {loading ? (
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
          <NameWrapper>
            <img style={{ borderRadius: "50%" }} src={user?.avatar} alt="" />
            <div>
              <h2>{user?.user}</h2>
              <div style={{ display: "flex", gap: 10 }}>
                <p>{addCommaToNumber(user?.followers)} followers</p>
                <p>{user?.tweets} tweets</p>
              </div>
            </div>
          </NameWrapper>
          <h3>Tweets</h3>
          <TweetsList>
            {tweets?.map(({ text, date }, index) => {
              return (
                <li key={index}>
                  <div
                    style={{ display: "flex", gap: 10, alignItems: "center" }}
                  >
                    <img
                      style={{ borderRadius: "50%", width: 30, height: 30 }}
                      src={user?.avatar}
                      alt=""
                    />
                    <Content>{text}</Content>
                  </div>
                  <p>Posted on : {date.toDateString()}</p>
                </li>
              );
            })}
          </TweetsList>
        </>
      )}
    </section>
  );
};

export default Tweets;
