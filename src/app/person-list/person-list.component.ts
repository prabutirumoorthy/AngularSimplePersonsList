import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../person-service.service';
import { Observable } from 'rxjs';
import { Person } from './person-list.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons$: Observable<Person[]> | undefined;
  constructor(private personservice: PersonServiceService) { }

  ngOnInit(): void {
    this.persons$ = this.personservice.getPersons();
  }

}
