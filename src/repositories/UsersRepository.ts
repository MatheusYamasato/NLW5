import { EntityRepository, Repository } from "typeorm";
import { User } from '../entities/User'

@EntityRepository(User)
class UsersResository extends Repository<User> {

}

export { UsersResository }