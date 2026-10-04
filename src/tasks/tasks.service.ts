import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks=[
        {
    "id": 1,
    "title": "Learn NestJS",
    "completed": false
  },
  {
    "id": 2,
    "title": "Build REST API",
    "completed": false
  }
    ];
    getAllTasks(){
        return this.tasks;
    }
    
    getTaskById(id:number){
        const task=this.tasks.find(task=>task.id===id);
        if(!task){
            return {message:'task not found'}
        }
    return task;
}
createTask(title:string){
    const newTask={
        id: this.tasks.length+1,
        title,
        completed:false,
    };
    this.tasks.push(newTask);
    return newTask;
}
deleteTask(id:number){
    const index=this.tasks.findIndex(task=>task.id===id);
    if(index===-1){
        return{message:'Task not found'};
    }
    this.tasks.splice(index,1);
    return{message:'Task deleted successfully'};
}
updateTask(id:number,completed:boolean){
    const task =this.tasks.find(task=>task.id===id);
    if(!task){
        return {message:'Task not Found'};
    }
    task.completed=completed;
    return task;
}
}

