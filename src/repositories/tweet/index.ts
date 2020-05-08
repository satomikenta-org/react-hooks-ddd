import { ITweetRepository } from "../../domain/tweet/tweet-repository.interface";
import { Tweet, TweetContent } from "../../domain/tweet/tweet";


// Repository: 

// fetch and save data from(to)
// Backend API,  
// InMemory, etc


// export class ApiTweetRepository implements ITweetRepository {
//   findAll(): Tweet[] {
//   }
//   deleteOneById(id: string) {
//   } ....
// } 

export class InMemoryTweetRepository implements ITweetRepository {
  tweets: Tweet[] = [];
  constructor() {
    this.tweets = [ 
      new Tweet(new TweetContent('This is the First Tweet !!')), 
      new Tweet(new TweetContent('This is the Second Tweet !!'))
    ];
  }

  findAll(): Tweet[] {
    return this.tweets;
  }

  save(tweet: Tweet): Tweet {
    this.tweets.push(tweet);
    return tweet;
  }

  deleteOneById(id: string): void {
    const newTweets = this.tweets.filter( tweet => tweet.id !== id);
    this.tweets = newTweets;
  }
}