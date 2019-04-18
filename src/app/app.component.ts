import { Component } from '@angular/core';
import { CommentService } from './Allservice/comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comment';
  
  public showdata = [];
  constructor(private myservice : CommentService){}

  ngOnInit(){
    this.myservice.mydata().subscribe(data => this.showdata = data)
  }

}
