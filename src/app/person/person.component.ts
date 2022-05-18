import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Person } from "./person"

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})

export class PersonComponent implements OnInit {

  public people: Person[] = [];
  public errorMessage: string = '';
  constructor( private http: HttpClient) { }

  public getPerson(): void {
    this.http.get<Person[]>("https://jsonplaceholder.typicode.com/users").subscribe(data => {
      this.people = data;
    },
      error => {
      this.errorMessage = error['name'];
      console.log(error);
      }
    );
  }

  ngOnInit(): void {
  }

}
