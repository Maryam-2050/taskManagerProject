import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
taskId;
task;
  constructor(private route:ActivatedRoute,private tasksSer : TasksService,
    private router:Router,
    private title:Title) {
      this.title.setTitle('Task Manager')
     }

  ngOnInit(){
    this.taskId=this.route.snapshot.paramMap.get('id')
    this.task = this.tasksSer.tasks[this.taskId]
   }
  saveTask(){
    this.tasksSer.editTask(this.taskId,this.task)
    this.router.navigate(['/'])
  }

  deleteTask(){
    this.tasksSer.deleteTask(this.taskId)
    this.router.navigate(['/'])
  }

}
