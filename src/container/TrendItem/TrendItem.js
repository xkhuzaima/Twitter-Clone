import { MoreHoriz } from "@mui/icons-material";
import React from "react";

function TrendItem(props) {
  return (
    <div className="trend row-between">
      <div className="trendName">
        {props.trendlocation.length > 0 ? (
          <p>Trending in {props.trendlocation}</p>
        ) : (
          <p>Trending</p>
        )}
        <h4>{props.trendname}</h4>
        {props.trendtweetcount > 0 ? (
          <p>{props.trendtweetcount} Tweets</p>
        ) : (
          <p>0 Tweets</p>
        )}
      </div>
      <MoreHoriz />
    </div>
  );
}

export default TrendItem;
