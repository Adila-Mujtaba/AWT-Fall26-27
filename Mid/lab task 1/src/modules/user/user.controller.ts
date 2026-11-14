import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UserService } from "@/src/modules/user/user.service";
import { CreateUserDto } from "@/src/modules/user/dto/user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userDto: CreateUserDto) {
    return await this.userService.createUser(userDto);
  }

  @Get()
  async getUser() {
    return await this.userService.getUser();
  }

  @Get(":id")
  async getUserById(@Param("id") id: string) {
    return await this.userService.getUserById(id);
  }

  @Patch(":id")
  async updateUser(@Param("id") id: string, @Body() userDto: Partial<CreateUserDto>) {
    return await this.userService.updateUser(id, userDto);
  }

  @Delete(":id")
  async deleteUser(@Param("id") id: string) {
    return await this.userService.deleteUser(id);
  }
}
