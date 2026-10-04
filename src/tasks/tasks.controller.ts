import { Controller, Get ,Param,Post,Body,Delete,Patch} from '@nestjs/common';
import {TasksService} from './tasks.service.js';
@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService:TasksService){}
    @Get()//get all tasks
    getAllTasks(){
        return this.taskService.getAllTasks();
    }
    @Get(':id')
    getTaskById(@Param('id') id:string) {
        return this.taskService.getTaskById(Number(id));
    }

    @Post()
    createTask(@Body() head:{title:string}){
        return this.taskService.createTask(head.title);
    }
@Delete(':id')
deleteTask(@Param('id')id:string){
    return this.taskService.deleteTask(Number(id));
}
@Patch(':id')
updateTask(@Param('id')id:string,@Body() body:{completed:boolean}){
    return this.taskService.updateTask(Number(id),body.completed);
}
}
