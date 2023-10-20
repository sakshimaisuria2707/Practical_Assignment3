import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductinsertComponent } from './productinsert/productinsert.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path: 'productinsert',component:ProductinsertComponent},
  {path:"edit/:id",component:EditProductComponent},
  {path:"delete/:id",component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
