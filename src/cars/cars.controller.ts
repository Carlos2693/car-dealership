import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    

    @Get()
    getAllCards() {
        return this.cars
    }

    @Get(':id')
    getCarById(@Param('id') id: string) {
        return this.cars[id]
    }
}
