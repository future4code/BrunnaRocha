import {CreatePost} from '../../entities/CreatePost'

export interface CreatePostGateway {
  createRecipe(createpost: CreatePost): Promise<CreatePost>
}
