import { Tweet } from "../domain/tweet/tweet";

const Reducer = (state: any, action: any) => {
  switch(action.type) {
    case 'SET_TWEETS':
      return { ...state, tweets: action.payload };
    case 'DELETE':
      const newTweets = state.tweets.filter( (tweet: Tweet) => tweet.id !== action.payload);
      return { ...state, tweets: newTweets };
    default:
      return state;
  }
};

export default Reducer;
