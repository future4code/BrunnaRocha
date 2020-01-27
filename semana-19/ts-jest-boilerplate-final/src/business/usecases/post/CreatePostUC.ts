import {UserGateway} from '../../gateways/user/UserGateway'
import {CreatePost} from '../../entities/CreatePost'
import {CreatePostGateway} from '../../gateways/post/CreatePostGateway'

export class CreatePostUC {
  constructor(private userGateway: UserGateway, private createPostGateway: CreatePostGateway) {}

  async execute(input: CreatePostInput): Promise<CreatePostOutput> {
    this.validateInput(input)

    await this.verifyUserExists(input.photo)

    const createdPost = await this.createPost(input)

    return {
      photo: createdPost.getPhoto(),
      description: createdPost.getDescription(),
      creationdate: createdPost.getCreationdate(),
      type: createdPost.getType()
    }
  }

  validateInput(input: CreatePostInput) {
    if(!(input.photo && input.description && input.creationdate && input.type)) {
      throw new Error('Alguma informação faltando')
    }
  }

  async verifyUserExists(userId: string) {
    const userExists = await this.userGateway.verifyUserExists(userId)

    if(!userExists) {
      throw new Error('Não é possível criar uma receita para um usuário não existente')
    }
  }

  createPost(input: CreatePostInput) {
    const newPost = new CreatePost(input.photo, input.description, input.creationdate, input.type)

    return this.createPostGateway.createPost(newPost)
  }
}

export interface CreatePostInput {
    photo: string
    description: string
    creationdate: Date
    type: string
  }
  
export  interface CreatePostOutput {
    photo: string
    description: string
    type: string
    creationdate: Date
  }