import { Tweet } from "./tweet";
import { ITweetRepository } from "./tweet-repository.interface";
import { InMemoryTweetRepository } from "../../repositories/tweet";

// Usecase
class TweetAppService {
  constructor(private tweetRepository: ITweetRepository){}

  findAll(): Tweet[] {
    return this.tweetRepository.findAll();
  }

  deleteOneById(id: string): void {
    return this.tweetRepository.deleteOneById(id);
  }
}


const tweetRepository = new InMemoryTweetRepository();

export const tweetAppService = new TweetAppService(tweetRepository);

