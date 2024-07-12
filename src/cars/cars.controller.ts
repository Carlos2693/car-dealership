import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars = ['BMW', 'Alfa Romero', 'Ford']

    @Get()
    getAllCards() {
        return this.cars
    }

    @Get(':id')
    getCarById(@Param('id') id: string) {
        return this.cars[id]
    }
}
