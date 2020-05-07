import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { add } from '../../assets/test1.js';

@Component({
  selector: 'app-create-one',
  templateUrl: './create-one.component.html',
  styleUrls: ['./create-one.component.css']
})
export class CreateOneComponent implements OnInit {

  @Input() postDetails = { title: '', body: '', id: 0 };
  @Input() addNumbers = { x: 0, y: 0};

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  async createOnePost()
  {
    const response = await this.dataService.Create_A_Post(this.postDetails.title, this.postDetails.body, this.postDetails.id);
    console.log(typeof(response));
    console.log(response);
    const dataService = await response.json();
    console.log(typeof(dataService));
    console.log(dataService);
  }

  printResult()
  {
    const total = add(this.addNumbers.x, this.addNumbers.y);
    console.log(total);
  }
}
