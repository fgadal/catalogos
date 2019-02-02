import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FigurineCreatePageComponent } from './figurines/figurine-create-page/figurine-create-page.component';
import { FigurineEditPageComponent } from './figurines/figurine-edit-page/figurine-edit-page.component';
import { FigurineListComponent } from './figurines/figurine-list/figurine-list.component';

const routes: Routes = [
  { path: '', component: FigurineListComponent },
  { path: 'new', component: FigurineCreatePageComponent },
  { path: ':id', component: FigurineEditPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
