import { Injectable } from '@nestjs/common';
import { Task } from './dto/task.model';
import { CreateTaskInput } from './dto/create-task.input';

@Injectable()
export class TasksService {
    private tasks: Task[] = [{ id: 1, name: 'task 1', description: '' }, { id: 2, name: 'task 2', description: '' }, { id: 3, name: 'task 3', description: '' }]

    getAll(): Task[] {
        return this.tasks;
    }

    addTask(input: CreateTaskInput): Task {
        const task = {
            id: 4,
            name: input.name,
            description: input.description
        } as Task;

        return task;
    }
}
