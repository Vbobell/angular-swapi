import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getList } from '../../store/films/films.actions';

@Component({
  selector: 'films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films: Observable<Object>;

  constructor(private store: Store<{ films: Object }>) {
    this.films = store.pipe(select('films'));
    console.log(this.films);
  }

  ngOnInit() {
    this.store.dispatch(getList());
  }

}
