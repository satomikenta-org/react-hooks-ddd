import React from "react";
import { Tweet } from "../../domain/tweet/tweet";
import TweetCard from "./TweetCard";

interface TweetListProps {
  tweets: Tweet[]
}

function TweetList(props: TweetListProps) { 
  return (
    <>
      { props.tweets.map( (tweet: Tweet) => (
        <div style={ tweetListStyle } key={tweet.id} >
          <TweetCard tweet={tweet} />
        </div>)) 
      }
    </>
  )
}

const tweetListStyle = { marginTop: "30px" };

export default TweetList;

