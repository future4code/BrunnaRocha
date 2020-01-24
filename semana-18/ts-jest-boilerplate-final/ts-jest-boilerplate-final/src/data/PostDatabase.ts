import {CreatePostGateway} from '../business/gateways/post/CreatePostGateway'
import {CreatePost} from '../business/entities/CreatePost'
import {BaseDatabase} from './BaseDatabase'
//import {FeedDatabase} from './feedDatabase'


export class PostDatabase extends BaseDatabase implements CreatePostGateway {
  private feedDatabase: FeedDatabase
  constructor() {
    super()
    this.feedDatabase = new FeedDatabase()
  }

  async createPost(post: CreatePost): Promise<CreatePost> {
    const response = await this.connection.raw(`
    INSERT INTO Posts (photo, description, creationdate, type)
    VALUES ("${post.getPhoto()}",
    "${post.getDescription()}",
    "${post.getCreationdate()}",
    "${this.getSQLDateFromTSDate(post.getCreationdate())}");
    `)

    const userQuery = await this.connection.select('photo').from('Posts').where('photo', post.getPhoto())
    const userName: string = userQuery[0].name

    const query = await this.connection.raw(`SELECT * FROM FutureBook_users_relations WHERE followed_id="${post.getUserId()}";`)

    const followersIds = query[0].map((res: {follower_id: string, followed_id: string}) => res.follower_id)

    const promises = followersIds.map((followerId: string) => {
      return this.feedDatabase.insertRecipeIntoFeed({
        userId: followerId,
        recipeId: response[0].insertId as number,
        photo: post.getPhoto(),
        description: post.getDescription(),
        posterId: post.getUserId(),
        creation_date: this.getSQLDateFromTSDate(post.getCreationdate()),
        userName
      })
    })

    await Promise.all(promises)

    return post
  }
}
