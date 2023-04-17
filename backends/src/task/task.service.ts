import { Injectable } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  constructor(
    private readonly prisma:PrismaService
  ){}
  async create(dto:TaskDto, userId:number):Promise<Task> {
    console.log(dto)
    const task = await this.prisma.task.create({
      data: {
        userId,
        counterparty:dto.counterparty,
        period:Number(dto.period),
        capital:Number(dto.capital),
        rate:Number(dto.rate),
        transactionDate:new Date(dto.transactionDate),
      }
    })
    return task
  }
  async getAll(userId:number):Promise<Task[]> {
    const tasks = await this.prisma.task.findMany({
      where: {
        userId
      }
    })
    return tasks
  }
  //一月ごとの取引取得
}
