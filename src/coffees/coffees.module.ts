import { Module } from '@nestjs/common';
import { CoffeesController } from 'src/coffees/coffes.controller';
import { CoffesService } from 'src/coffees/coffes.service';

@Module({ 
    imports:[CoffeesModule],
    controllers: [CoffeesController], 
    providers: [CoffesService] })
export class CoffeesModule { }
