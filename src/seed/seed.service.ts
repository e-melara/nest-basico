import { Injectable } from '@nestjs/common';

import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';

import { BRANDS_SEED, CARS_SEED } from './data';

@Injectable()
export class SeedService {
  constructor(
    private carService: CarsService,
    private brandService: BrandsService,
  ) {}

  public populateDB() {
    this.carService.fillCardWithSeedData(CARS_SEED);
    this.brandService.fillBrandsWithSeedData(BRANDS_SEED);

    return 'Seed Run Successfly';
  }
}
