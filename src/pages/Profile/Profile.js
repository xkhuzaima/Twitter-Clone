import {
  CalendarMonthOutlined,
  KeyboardBackspaceOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./styles.css";
import feeds from "../../data/Feed.json";
import trends from "../../data/Trend.json";
import FeedItem from "../../container/FeedItem/FeedItem";
import TrendItem from "../../container/TrendItem/TrendItem";

function Profile() {
  const [activeTab, setActiveTab] = useState("Tweets");
  return (
    <div className="profile">
      <div className="headerProfile">
        <div className="row-nospace">
          <KeyboardBackspaceOutlined
            onClick={() => (window.location.href = "/")}
          />
          <div>
            <h4>ChillnCode529</h4>
            <p>4 Tweets</p>
          </div>
        </div>
      </div>
      <div className="profileInfo">
        <img
          src="https://pbs.twimg.com/profile_banners/1591733371830501376/1668334780/1500x500"
          style={{ width: "600px" }}
        />
        <div className="row-between">
          <Avatar
            sx={{
              width: 130,
              height: 130,
              marginTop: "-70px",
              marginLeft: "20px",
            }}
            src="https://yt3.ggpht.com/jdzNjnfkJayS5QpVHzluOt4EjGlvajabT3IOFYY8mSaCiQf5QYDLMQlv72qmuX1hlVQguLckew=s176-c-k-c0x00ffffff-no-rj-mo"
          />
          <button className="editProfileBtn">Edit Profile</button>
        </div>
        <div style={{ margin: 20 }}>
          <h4>ChillnCode529</h4>
          <p>@ChillnCode529</p>
          <p className="desc">
            I am a freelancer and Youtuber (Chill n Code). My dream is to become
            a successful entrepreneur like all the other ideal self-made
            business men.
          </p>
          <p className="joinDate">
            <CalendarMonthOutlined />
            Joined May 2021
          </p>
          <div className="row-nospace followering">
            <p>
              <span className="bold">239</span> Following
            </p>
            <p>
              <span className="bold">545</span> Followers
            </p>
          </div>
        </div>
      </div>
      <div className="profileTabs row-nospace">
        <div
          style={{
            width: 600 / 4,
            color: activeTab === "Tweets" ? "#e7e9ea" : "#676b6f",
            fontWeight: activeTab === "Tweets" ? "bold" : "normal",
            borderBottom: activeTab === "Tweets" ? "2px solid #1d9bf0" : 0,
          }}
          className="profileTab activeTab"
          onClick={() => setActiveTab("Tweets")}
        >
          <p>Tweets</p>
        </div>
        <div
          style={{
            width: 600 / 4,
            color: activeTab === "Tweets & Replies" ? "#e7e9ea" : "#676b6f",
            fontWeight: activeTab === "Tweets & Replies" ? "bold" : "normal",
            borderBottom:
              activeTab === "Tweets & Replies" ? "2px solid #1d9bf0" : 0,
          }}
          className="profileTab"
          onClick={() => setActiveTab("Tweets & Replies")}
        >
          <p>Tweets & Replies</p>
        </div>
        <div
          style={{
            width: 600 / 4,
            color: activeTab === "Media" ? "#e7e9ea" : "#676b6f",
            fontWeight: activeTab === "Media" ? "bold" : "normal",
            borderBottom: activeTab === "Media" ? "2px solid #1d9bf0" : 0,
          }}
          className="profileTab"
          onClick={() => setActiveTab("Media")}
        >
          <p>Media</p>
        </div>
        <div
          style={{
            width: 600 / 4,
            color: activeTab === "Likes" ? "#e7e9ea" : "#676b6f",
            fontWeight: activeTab === "Likes" ? "bold" : "normal",
            borderBottom: activeTab === "Likes" ? "2px solid #1d9bf0" : 0,
          }}
          className="profileTab"
          onClick={() => setActiveTab("Likes")}
        >
          <p>Likes</p>
        </div>
      </div>
      <div className="profileTweets">
        {activeTab === "Tweets" ? (
          <>
            {feeds.feed
              .filter((item) => item.name === "ChillnCode529")
              .map((item) => (
                <FeedItem
                  avatarurl={item.avatarurl}
                  name={item.name}
                  time={item.time}
                  text={item.text}
                  image={item.image}
                  view={item.view}
                  comment={item.comment}
                  retweet={item.retweet}
                  like={item.like}
                  verified={item.verified}
                />
              ))}
          </>
        ) : null}
        {activeTab === "Tweets & Replies" ? (
          <>
            {feeds.feed
              .filter((item) => item.name === "ChillnCode529")
              .map((item) => (
                <FeedItem
                  avatarurl={item.avatarurl}
                  name={item.name}
                  time={item.time}
                  text={item.text}
                  image={item.image}
                  view={item.view}
                  comment={item.comment}
                  retweet={item.retweet}
                  like={item.like}
                  verified={item.verified}
                />
              ))}
          </>
        ) : null}
        {activeTab === "Media" ? (
          <>
            {feeds.feed
              .filter((item) => item.name === "ChillnCode529")
              .filter((item) => item.image.length > 0)
              .map((item) => (
                <FeedItem
                  avatarurl={item.avatarurl}
                  name={item.name}
                  time={item.time}
                  text={item.text}
                  image={item.image}
                  view={item.view}
                  comment={item.comment}
                  retweet={item.retweet}
                  like={item.like}
                  verified={item.verified}
                />
              ))}
          </>
        ) : null}
        {activeTab === "Likes" ? (
          <div className="center mt-4">
            <h4>You didn't liked any post...</h4>
          </div>
        ) : null}
      </div>
      <div className="trends profileTrends">
        <h4>Trends for you</h4>
        {trends.trend.slice(0, 7).map((item) => (
          <TrendItem
            trendtweetcount={item.trendtweetcount}
            trendname={item.trendname}
            trendlocation={item.trendlocation}
          />
        ))}
        <div className="trendsFooter">
          <p>Show More</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
