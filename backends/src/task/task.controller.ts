import { Body, Controller, Get, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Task } from '@prisma/client';
import { Request } from 'express';
import { TaskDto } from './dto/task.dto';
import { TaskService } from './task.service';

@UseGuards(AuthGuard('jwt'))
@Controller('task')
export class TaskController {
  constructor(
    private readonly service:TaskService,
  ){}
  @Post()
  createTask(@Req() req:Request, @Body() dto:TaskDto):Promise<Task> {
      return this.service.create(dto, req.user.id)
  }
  @Get()
  getAllTasks(@Req() req:Request):Promise<Task[]> {
    return this.service.getAll(req.user.id)
  }
}
