import { Repository } from 'typeorm';
import CreateUserDto from './dto/createUser.dto';
import User from './user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getByEmail(email: string): Promise<User>;
    create(userData: CreateUserDto): Promise<User>;
    getById(id: number): Promise<User>;
    findAll(): Promise<User[]>;
}
