import { Action, createReducer, on } from '@ngrx/store';
import { getList } from './films.actions';

export interface Film {
    episode_id: number;
    title: String;
    opening_crawl: String;
}

export interface Films {
    title: String;
    list: Array<Film>;
}

export const filmsState:Films = {
    title: 'Films',
    list: [{
        episode_id: 0,
        title: 'Wait..',
        opening_crawl: ''
    }]
};

const _listReducer = createReducer(filmsState,
    on(getList, (state, action) => {
        return {...state, list: action.list };
    })
);

export function listReducer(state: Films, action: Action) {
    return _listReducer(state, action);
};