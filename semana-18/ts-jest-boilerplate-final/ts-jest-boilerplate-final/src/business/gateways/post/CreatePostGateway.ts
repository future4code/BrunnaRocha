import {CreatePost} from '../../entities/CreatePost'

export interface CreatePostGateway {
  createPost(createpost: CreatePost): Promise<CreatePost>
}
