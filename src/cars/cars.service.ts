import { Injectable } from '@nestjs/common';

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
    return this.cars.find(function(item) {
      return item.id === id
    })
  }
}
