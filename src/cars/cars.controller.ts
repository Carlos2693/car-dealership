import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
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
    getCarById(@Param('id', ParseUUIDPipe) id: string) {
        return this.cardsService.findOnById(id)
    }

    @Post()
    createCar(@Body() body: any) {
        return body
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any
    ) {
        return body
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        return {
            method: 'delete',
            id: id
        }
    }

}
