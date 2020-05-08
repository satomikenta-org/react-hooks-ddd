import React from "react";
import { Tweet } from "../../domain/tweet/tweet";
import ColumnContainer from "../shared/ColumnContainer";
import RowContainer from "../shared/RowContainer";
import { useDeleteTweets } from "../../hooks/tweet/useDeleteTweet";

interface TweetCardProps {
  tweet: Tweet, 
}

function TweetCard(props: TweetCardProps) {
  const { tweet } = props;
  const [ handleDelete ] = useDeleteTweets();

  return (
    <ColumnContainer width={"100vw"}>
      <h3> {tweet.content} </h3>
      <div> likes: {tweet.likes}</div>
      <RowContainer width={"15vw"}>
        <button onClick={ () => handleDelete(tweet.id) }>Delete</button>
        <button>Like</button>
      </RowContainer>
    </ColumnContainer>
  );
}

export default TweetCard;


