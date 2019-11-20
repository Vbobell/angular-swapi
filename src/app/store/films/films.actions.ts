import { createAction, props } from '@ngrx/store';

import { Film } from './films.reducer';

export const getList = createAction('[List Component] getList', props<{list: Film[]}>());