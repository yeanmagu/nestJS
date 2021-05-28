//partialtype permite extender de otra clase y hacer que todas las propiedades sean opcionales
// y las permite colocar como opcionales 
import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "./create-coffee.dto";

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {
   
}
