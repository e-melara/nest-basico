import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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

  // post
  @Post()
  postCars(@Body() body: any) {
    console.log(body)
    return body
  }
  // update
  @Put(':id')
  patchCars(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: any
  ) {
    return {
      body,
      id
    }
  }
  // delete
  @Delete(':id')
  deleteCard(
    @Param('id', ParseIntPipe) id: number
  ) {
    return {
      id,
      'method': 'Delete'
    }
  }
}
