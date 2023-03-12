import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthenticationService } from '../authentication/authentication.service';
import CreateUserDto from './dto/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly authService: AuthenticationService,
    private readonly userService: UsersService,
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
