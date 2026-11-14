import { IsNotEmpty, IsOptional, IsEmail, Matches, IsString, MinLength, IsInt, Min, Max, IsIn } from "class-validator";

export class CreateUserDto {

  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: "Name must be at least 3 characters long" })
  name: string = "";

  @IsEmail({}, { message: "Invalid email address" })
  @IsNotEmpty()
  email!: string;
  
  @IsString()
  @MinLength(8, { message: "Password must be at least 8 characters long" })
  password!: string;
  @Max(120, { message: "Age must be less than or equal to 120" })

  @IsInt()
  @Min(18, { message: "Age must be at least 18" })
  @Max(60, { message: "Age must be less than or equal to 60" })
  age!: number;

  @IsString()
  @Matches(/^01\d{9}$/, {
    message: "phone must be exactly 11 digits and start with 01",
  })
  phone!: string;

  @IsIn(['teacher', 'student'], { message: "account type must be either 'teacher' or 'student'" })
  @IsString()
  @IsNotEmpty({ message: "account type is required" })
  accountType!: string;

  @IsString()
  @IsOptional()
  @Min(10, { message: "Address must be at least 10 characters long" })
  address?: string;




}

