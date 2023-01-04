import {
  BarChartRounded,
  ChatOutlined,
  FavoriteBorderOutlined,
  IosShareOutlined,
  LoopOutlined,
  MoreHorizOutlined,
  VerifiedRounded,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";

function FeedItem(props) {
  return (
    <div className="feedItem w-100">
      <div className="row-between">
        <div className="row-nospace">
          <Avatar sx={{ width: 50, height: 50 }} src={props.avatarurl} />
          <div
            className="feedItemInfo row-nospace mt-1"
            style={{ width: "70%", marginLeft: 10 }}
          >
            <h4>
              {props.name}{" "}
              {props.verified === true ? (
                <VerifiedRounded
                  sx={{
                    color: "#1DA1F2",
                    fontSize: 15,
                    marginTop: "-5px",
                  }}
                />
              ) : (
                <div></div>
              )}
            </h4>
            <p>@{props.name}</p>
            <p style={{ fontWeight: "bolder" }}> · </p>
            <p>{props.time}</p>
          </div>
        </div>
        <MoreHorizOutlined className="feedMoreIcon" />
      </div>
      <div className="feedItemContent">
        <h4>
          {props.text}
          <br />
          {props.image === "" ? <div></div> : <img src={props.image} />}
        </h4>
      </div>
      <div className="feedItemFooter">
        <div className="row-between">
          <div className="feedItemIcons row-nospace View">
            <BarChartRounded />
            <p>{props.view}</p>
          </div>
          <div className="feedItemIcons row-nospace Reply">
            <ChatOutlined />
            <p>{props.comment}</p>
          </div>
          <div className="feedItemIcons row-nospace ReTweet">
            <LoopOutlined />
            <p>{props.retweet}</p>
          </div>
          <div className="feedItemIcons row-nospace Like">
            <FavoriteBorderOutlined />
            <p>{props.like}</p>
          </div>
          <div className="feedItemIcons row-nospace Share">
            <IosShareOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedItem;
