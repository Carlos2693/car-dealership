import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly cardsService: CarsService
    ) {}

    @Get()
    getAllCards() {
        return this.cardsService.findAll()
    }

    @Get(':id')
    getCarById(@Param('id', ParseIntPipe) id: number) {
        return this.cardsService.findOnById(+id)
    }
}
