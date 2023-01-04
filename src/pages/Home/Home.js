import {
  AutoAwesomeOutlined,
  BallotOutlined,
  CalendarMonthOutlined,
  GifBoxOutlined,
  InsertPhotoOutlined,
  LocationOnOutlined,
  SearchOutlined,
  SentimentSatisfiedAltOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./styles.css";
import feeds from "../../data/Feed.json";
import trends from "../../data/Trend.json";
import FeedItem from "../../container/FeedItem/FeedItem";
import TrendItem from "../../container/TrendItem/TrendItem";

function Home() {
  return (
    <div className="home">
      <div>
        <div className="header">
          <div className="row-between">
            <h4>Home</h4>
            <AutoAwesomeOutlined className="headerIcon" />
          </div>
          <div className="headerCreate">
            <div className="row-nospace">
              <Avatar
                sx={{ width: 50, height: 50 }}
                src="https://yt3.ggpht.com/jdzNjnfkJayS5QpVHzluOt4EjGlvajabT3IOFYY8mSaCiQf5QYDLMQlv72qmuX1hlVQguLckew=s176-c-k-c0x00ffffff-no-rj-mo"
              />
              <div style={{ width: "80%", height: "30%" }}>
                <textarea
                  className="headerCreateInput"
                  placeholder="What's happening?"
                />
                <div className="row-between">
                  <div className="headerCreateIcons">
                    <InsertPhotoOutlined />
                    <GifBoxOutlined />
                    <BallotOutlined />
                    <SentimentSatisfiedAltOutlined />
                    <CalendarMonthOutlined />
                    <LocationOnOutlined />
                  </div>
                  <div className="headerCreateButton">
                    <button>Tweet</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feed">
          {feeds.feed.map((item) => (
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
        </div>
      </div>
      <div>
        <div className="search">
          <div className="searchTwitter">
            <div className="row-nospace">
              <SearchOutlined className="searchTwitterIcon" />
              <input
                type="text"
                placeholder="Search Twitter"
                className="searchTwitterInput"
              />
            </div>
          </div>
        </div>
        <div className="trends">
          <h4>Trends For You</h4>
          {trends.trend.slice(0, 6).map((item) => (
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
    </div>
  );
}

export default Home;
