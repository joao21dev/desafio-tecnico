import { Response } from 'express';
import { AuthenticationService } from './authentication.service';
import RequestWithUser from './requestWithUser.interface';
import RegisterDto from './dto/register.dto';
export declare class AuthenticationController {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    register(registrationData: RegisterDto): Promise<import("../users/user.entity").default>;
    logIn(request: RequestWithUser, response: Response): Promise<Response<any>>;
    authenticate(request: RequestWithUser): import("../users/user.entity").default;
}
