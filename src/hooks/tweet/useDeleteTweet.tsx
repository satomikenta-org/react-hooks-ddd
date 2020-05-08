import { useContext } from "react";
import { tweetAppService } from "../../domain/tweet/tweet-service";
import AppContext from "../../store/context";

// Hooks act as 'Adapter' layer.
export const useDeleteTweets = () => {

  const { _, dispatch } = useContext(AppContext);
  
  const handleDelete = (id: string) => {
    tweetAppService.deleteOneById(id);
    dispatch({ type: 'DELETE', payload: id });    
  }
  
  return [handleDelete];
}
