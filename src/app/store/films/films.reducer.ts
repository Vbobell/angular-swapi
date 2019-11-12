import { createReducer, on } from '@ngrx/store';
import { getList } from './films.actions';

export const filmsState = {
    title: 'Films',
    list: [{
        id: 0,
        name: 'Wait..',
        description: ''
    }]
};

const _listReducer = createReducer(filmsState,
    on(getList, state => state)
);

export function listReducer(state, action) {
    return _listReducer(state, action);
};