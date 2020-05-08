import { useEffect, useContext} from "react";
import { tweetAppService } from "../../domain/tweet/tweet-service";
import AppContext from "../../store/context";

// Hooks act as 'Adapter' layer.
export const useFetchTweets = () => {

  const { state, dispatch } = useContext(AppContext);
  
  useEffect(() => {
    const allTweets = tweetAppService.findAll();  
    dispatch({ type: 'SET_TWEETS', payload: allTweets });
  }, []);

  return [ state.tweets ]; 
}
