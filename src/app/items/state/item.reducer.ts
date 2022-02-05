import { Action, createReducer, on } from '@ngrx/store';
import * as ItemActions from './item.actions';

export const itemFeatureKey = 'item';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(ItemActions.loadItems, state => state),
  on(ItemActions.loadItemsSuccess, (state, action) => state),
  on(ItemActions.loadItemsFailure, (state, action) => state),

);
