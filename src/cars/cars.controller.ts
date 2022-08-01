import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCardById(@Param('id', ParseUUIDPipe) id: string) {
    const cars = this.carsService.findOneById(id);
    if (cars) {
      return cars;
    }

    return {
      message: 'No se encontro el id el carro',
    };
  }

  // post
  @Post()
  @UsePipes(ValidationPipe)
  postCars(@Body() body: CreateCarDto) {
    const car = this.carsService.create(body);
    return {
      car,
    };
  }
  // update
  @Put(':id')
  patchCars(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDTO: UpdateCarDto,
  ) {
    return this.carsService.update(id, updateCarDTO);
  }
  // delete
  @Delete(':id')
  deleteCard(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}
