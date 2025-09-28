import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { Task } from './dto/task.model';
import { CreateTaskInput } from './dto/create-task.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/common/guards/auth-guard';

@Resolver()
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) { }

  @UseGuards(AuthGuard)
  @Query(() => [Task], { name: 'tasks' })
  getTasks() {
    return this.tasksService.getAll();
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Task, { name: 'createTask' })
  addTask(@Args('createTaskInput') input: CreateTaskInput) {
    return this.tasksService.addTask(input);
  }

}
