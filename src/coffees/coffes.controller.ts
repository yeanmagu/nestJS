import { Body, Controller, Delete, Get, HttpCode, HttpService, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { pathToFileURL } from 'url';
import { CoffesService } from './coffes.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    /**
     *
     */
    constructor(private readonly coffesService: CoffesService) {}

    @Get()
    findAll(@Query() paginationQuery){
        const{limit,offset} = paginationQuery;
        return this.coffesService.findAll();
        //return `Ths action return all coffees. Limit ${limit}, offset ${offset} `;
    }

    @Get(':id')
    findOne(@Param('id')id: string){
        return this.coffesService.findOne(id);
        return  `This action returns #${id} cofee`;
    }

    @Post()
    create(@Body() createCoffeDto: CreateCoffeeDto){
        console.log(createCoffeDto instanceof CreateCoffeeDto);
        
         this.coffesService.create(createCoffeDto);
         return createCoffeDto;
    }

    //Path allow update some part at resources
    //Put update all resource
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto){
        return this.coffesService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.coffesService.remove(id);
    }
}
