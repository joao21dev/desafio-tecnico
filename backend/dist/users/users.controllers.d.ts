import { AuthenticationService } from '../authentication/authentication.service';
import CreateUserDto from './dto/createUser.dto';
import { UsersService } from './users.service';
export declare class UserController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthenticationService, userService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<import("./user.entity").default>;
    findAll(): Promise<import("./user.entity").default[]>;
}
