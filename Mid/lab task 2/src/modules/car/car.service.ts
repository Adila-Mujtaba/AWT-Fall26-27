import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Car } from "@/src/modules/car/entity/car.entity";
import { CreateCarDto } from "@/src/modules/car/dto/car.dto";

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  async createCar(dto: CreateCarDto) {
    try {
      const car = this.carRepository.create(dto);
      return await this.carRepository.save(car);
    } catch (error) {
      throw error;
    }
  }

  async getCars() {
    try {
      return await this.carRepository.find();
    } catch (error) {
      throw error;
    }
  }
}