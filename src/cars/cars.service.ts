import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corrolla'
    }, {
      id: 2,
      brand: 'Honda',
      model: 'Civic'
    }, {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee'
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const cars = this.cars.find(function(item) {
      return item.id === id
    })
    if (!cars) {
      throw new NotFoundException(`Card with id ${id} not found`)
    }
    return cars
  }
}
