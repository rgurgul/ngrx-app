import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromItem from './item.reducer';

export const selectItemState = createFeatureSelector<fromItem.State>(
  fromItem.itemFeatureKey
);
