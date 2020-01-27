class CreateRecipeUseCase {

    constructor(private: UserGateway: UserGateway)

    execute(input: CreateRecipeInput) {
        this.validateInput(input)

        this.verifyUserExists(input.UserId)

        return 'sucess'
    }

    validateInput(input: CreateRecipeInput) {
        if(!(input.title && input.description && input.userId)) {
            throw new Error('Information missing')
        }
    }

    verifyUserExists(userId: string) {

    }
}

interface CreateRecipeInput {
    title: string
    description: string
    userId: string
}

const useCase = new CreateRecipeUseCase()

const input = {
    title: 'a',
    description: 'b',
    userId: 'c'
}

try {
    const response = useCase.execute(input)
} catch(e) {
    console.log(e)
}

