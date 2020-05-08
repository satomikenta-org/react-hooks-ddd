import { Tweet } from "./tweet";

export interface ITweetRepository {
  findAll: () => Tweet[];
  save: (tweet: Tweet) => Tweet;
  deleteOneById: (tweetId: string) => void;
}
