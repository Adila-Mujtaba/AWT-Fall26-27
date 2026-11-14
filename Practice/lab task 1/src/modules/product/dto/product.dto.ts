import { IsString, IsNotEmpty, IsNumber, IsInt } from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  category!: string;

  @IsNumber()
  price!: number;

  @IsInt()
  quantity!: number;
}

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsNotEmpty()
  category?: string;

  @IsNumber()
  price?: number;

  @IsInt()
  quantity?: number;
}