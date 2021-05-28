import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffes.controller';
import { CoffesService } from './coffees/coffes.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [CoffeesModule],
  controllers: [AppController, CoffeesController],
  providers: [AppService, CoffesService],
})
export class AppModule {}
