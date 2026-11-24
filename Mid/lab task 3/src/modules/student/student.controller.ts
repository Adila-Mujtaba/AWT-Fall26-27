import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { StudentService } from "@/src/modules/student/student.service";
import { CreateStudentDto } from "@/src/modules/student/dto/student.dto";

@Controller("students")
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(@Body(ValidationPipe) dto: CreateStudentDto) {
    return await this.studentService.createStudent(dto);
  }

  @Get()
  async getStudents() {
    return await this.studentService.getStudents();
  }
}
