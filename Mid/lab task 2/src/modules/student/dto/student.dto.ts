import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty({ message: "Name is required" })
  name!: string;

  @IsString()
  @IsNotEmpty({ message: "Roll number is required" })
  rollNumber!: string;

  @IsEmail({}, { message: "Email must be valid" })
  @IsNotEmpty({ message: "Email is required" })
  email!: string;

  @IsInt({ message: "Age must be an integer" })
  @IsNotEmpty({ message: "Age is required" })
  age!: number;

  @IsString()
  @IsNotEmpty({ message: "Grade is required" })
  grade!: string;
}
