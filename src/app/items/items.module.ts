import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './state/item.effects';
import { reducer } from './state/item.reducer';



@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: ItemsComponent }
    ]),
    StoreModule.forFeature('items', reducer),
    EffectsModule.forFeature([ItemEffects])
  ]
})
export class ItemsModule { }
