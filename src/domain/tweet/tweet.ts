import * as uuid from 'uuid';

export class Tweet {
  id: string;
  content: string;
  likes: number;

  constructor(content: TweetContent, id?: string, likes?: number){
    this.content = content.value;
    this.id = id ? id : uuid.v4();
    this.likes = likes ? likes : 0
  };

}

export class TweetContent {
  value: string;

  constructor(content: string) {
    if (!content || content.length === 0) throw new Error('A tweet must have content.');
    if (content.length > 30) throw new Error('A tweet must not be longer than 30 characters.');
    this.value = content;
  }
}