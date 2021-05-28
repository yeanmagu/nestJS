//Importacion de la clase IsString para validar strings
import { IsString } from 'class-validator'
export class CreateCoffeeDto {
    @IsString()
    readonly name: string;
    @IsString()
    readonly brand: string;
    //IsString valida los valores string
    //each se establece en true para validar cada uno de los strings del array 
    @IsString({ each: true })
    readonly falvors: string[];

}
