import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoGestionComponent } from './producto-gestion/producto-gestion.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';
import { ProductoListComponent } from './producto-list/producto-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductoGestionComponent, ProductoFormComponent, ProductoListComponent]
})
export class ProductosModule { }
