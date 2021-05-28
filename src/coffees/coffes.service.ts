import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffesService {
    private coffes: Coffee[] = [
        {
            id: 1,
            name: 'Shipwreck Roast',
            brand: 'Buddy Brew',
            falvors: ['chocolate', 'vanilla']
        }
    ];

    findAll() {
        return this.coffes;
    }

    findOne(id: string) {
        const coffee = this.coffes.find(item => item.id === +id);;
        if (!coffee) {
            throw new NotFoundException(`Coffee #${id} not found`);
        }
        return coffee;
    }
    create(createCoffeDto: any) {
        this.coffes.push(createCoffeDto);
    }
    update(id: string, updateCoffeDto: any) {
        const existingCofee = this.findOne(id);
        if (existingCofee) {

        }
    }
    remove(id: string) {
        const coffeIndex = this.coffes.findIndex(item => item.id === +id);
        if (coffeIndex >= 0) {
            this.coffes.splice(coffeIndex, 1);
        }
    }
}
