import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString, Max, Min } from "class-validator";

export class CreateCarDto {
  @IsString()
  @IsNotEmpty({ message: "Brand is required" })
  brand!: string;

  @IsString()
  @IsNotEmpty({ message: "Model is required" })
  model!: string;

  @IsInt({ message: "Year must be an integer" })
  @IsNotEmpty({ message: "Year is required" })
  @Min(1886, { message: "Year must be valid" })
  @Max(2100, { message: "Year must be valid" })
  year!: number;

  @IsNumber({}, { message: "Price must be a number" })
  @IsNotEmpty({ message: "Price is required" })
  @IsPositive({ message: "Price must be greater than zero" })
  price!: number;
}