import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Student } from "@/src/modules/student/entity/student.entity";
import { CreateStudentDto } from "@/src/modules/student/dto/student.dto";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async createStudent(dto: CreateStudentDto) {
    try {
      const student = this.studentRepository.create(dto);
      return await this.studentRepository.save(student);
    } catch (error) {
      throw error;
    }
  }

  async getStudents() {
    try {
      return await this.studentRepository.find();
    } catch (error) {
      throw error;
    }
  }
}
