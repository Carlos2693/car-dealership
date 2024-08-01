import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto/index';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) {}

    @Get()
    getAllCards() {
        return this.carsService.findAll()
    }

    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.findOnById(id)
    }

    @Post()
    createCar(@Body() createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto)
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCarDto: UpdateCarDto
    ) {
        return updateCarDto
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        return {
            method: 'delete',
            id: id
        }
    }

}
