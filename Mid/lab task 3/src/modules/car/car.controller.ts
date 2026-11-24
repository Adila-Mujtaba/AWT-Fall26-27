import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { CarService } from "@/src/modules/car/car.service";
import { CreateCarDto } from "@/src/modules/car/dto/car.dto";

@Controller("cars")
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  async createCar(@Body(ValidationPipe) dto: CreateCarDto) {
    return await this.carService.createCar(dto);
  }

  @Get()
  async getCars() {
    return await this.carService.getCars();
  }
}