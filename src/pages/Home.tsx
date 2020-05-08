import React from "react";
import TweetList from "../components/tweet/TweetList";
import { useFetchTweets } from "../hooks/tweet/useFetchTweets";
import ColumnContainer from "../components/shared/ColumnContainer";

export default function Home(){ 
  const [ tweets ] = useFetchTweets();
  
  if (!tweets.length) return (
    <ColumnContainer width={"100vw"}>
      <h4>No Tweet ...</h4>
    </ColumnContainer>
  );
  
  return <TweetList tweets={tweets}/>;
}

