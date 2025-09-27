import { Injectable } from '@nestjs/common';
import { Task } from './dto/task.model';

@Injectable()
export class TasksService {
    private tasks: Task[] = [{ id: 1, name: 'task 1', description: '' }, { id: 2, name: 'task 2', description: '' }, { id: 3, name: 'task 3', description: '' }]

    getAll() {
        return this.tasks;
    }
}
