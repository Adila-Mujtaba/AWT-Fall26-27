import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "@/src/modules/user/entity/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "@/src/modules/user/dto/user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUser() {
    try {
      const user = await this.userRepository.find();
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getUserById(id: string) {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) {
        throw new NotFoundException("User with ID not found");
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  async createUser(dto: CreateUserDto) {
    try {
      const user = this.userRepository.create(dto);
      return await this.userRepository.save(user);
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id: string, dto: Partial<CreateUserDto>) {
    try {
      if (!id) {
        throw new NotFoundException("User with ID not found");
      }
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) {
        throw new NotFoundException("User with ID not found");
      }
      Object.assign(user, dto);
      const { id: uid, ...rest } = user;
      return await this.userRepository.update({ id: id }, rest);
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(id: string) {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) {
        throw new NotFoundException("Product with ID not found");
      }
      return await this.userRepository.delete({ id });
    } catch (error) {
      throw error;
    }
  }
}
