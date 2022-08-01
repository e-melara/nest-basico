import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsService: CarsService
  ) { }

  @Get()
  getAllCars() {
    return this.carsService.findAll()
  }

  @Get(':id')
  getCardById(@Param('id', ParseIntPipe) id: number) {
    const cars = this.carsService.findOneById(id);
    if (cars) {
      return cars;
    }

    return {
      message: 'No se encontro el id el carro'
    }
  }
}
