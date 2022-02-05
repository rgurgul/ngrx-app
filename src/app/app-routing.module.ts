import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "items", loadChildren: () => import('./items/items.module').then((m) => m.ItemsModule) },
  { path: "cart", loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
