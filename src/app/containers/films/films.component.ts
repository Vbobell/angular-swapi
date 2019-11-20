import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getList } from '../../store/films/films.actions';
import { Films } from '../../store/films/films.reducer';
import { FilmsService } from '../../services/films/films.service';

@Component({
  selector: '[films]',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films: Films;

  constructor(private store: Store<{ films: Films }>, private filmsService: FilmsService) {
    store.pipe(select('films')).subscribe(films => this.films = films);
  }

  ngOnInit() {
    this.filmsService.getFilms().subscribe(data => {
      this.store.dispatch(
        getList({
          list: data.results
        })
      )
    });
  }

}
