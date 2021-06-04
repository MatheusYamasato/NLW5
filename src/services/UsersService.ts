import { getCustomRepository, Repository } from "typeorm"
import { UsersResository } from "../repositories/UsersRepository"
import { User } from '../entities/User'

class UsersService {
    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersResository);
    }

    async create(email: string) {
        // Verificar se o usuário ex0,iste
        
        const userExists = await this.usersRepository.findOne({
            email
        })

        // Se existir, retornar usuário
        if(userExists) {
            return userExists;
        }

        const user = this.usersRepository.create({
            email
        })

        await this.usersRepository.save(user)
        // Se não existi9r, salvar no BD
        return user;
    }

    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({ email });
        return user;
    }
}

export { UsersService }