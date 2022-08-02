import { v4 as uuid } from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Car } from './interfaces/cars.interfaces';
import { CreateCarDto } from './dto/create.car.dto';
import { UpdateCarDto } from './dto/update.car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const cars = this.cars.find(function (item) {
      return item.id === id;
    });
    if (!cars) {
      throw new NotFoundException(`Card with id ${id} not found`);
    }
    return cars;
  }

  create(createCarDto: CreateCarDto) {
    const newCar = {
      id: uuid(),
      brand: createCarDto.brand,
      model: createCarDto.model,
    };

    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);
    this.cars = this.cars.map(function (car) {
      if (car.id === id) {
        carDB = {
          ...car,
          ...updateCarDto,
          id,
        };
        return carDB;
      }
      return car;
    });

    return carDB;
  }

  delete(id: string) {
    const car = this.findOneById(id);
    this.cars = this.cars.filter(function (item) {
      return item.id !== id;
    });
    return car;
  }

  fillCardWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
