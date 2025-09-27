import { Query, Resolver } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { Task } from './dto/task.model';

@Resolver()
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) { }

  @Query(() => [Task], { name: 'tasks' })
  getTasks() {
    return this.tasksService.getAll();
  }
}
