import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  category!: string;

  @IsNumber({}, { message: "Price must be a number" })
  @IsPositive({ message: "Price must be greater than zero" })
  @IsNotEmpty({ message: "Price is required" })
  price!: number;

  @IsInt({ message: "Quantity must be an integer" })
  @Min(0, { message: "Quantity cannot be negative" })
  @IsNotEmpty({ message: "Quantity is required" })
  quantity!: number;
}

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  category?: string;

  @IsNumber({}, { message: "Price must be a number" })
  @IsPositive({ message: "Price must be greater than zero" })
  @IsOptional()
  price?: number;

  @IsInt({ message: "Quantity must be an integer" })
  @Min(0, { message: "Quantity cannot be negative" })
  @IsOptional()
  quantity?: number;
}