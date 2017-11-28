import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoGestionComponent } from './producto-gestion/producto-gestion.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoAbstractService } from './producto.abstract.service';
import { ProductoHttpService } from './producto.http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,HttpClientModule
    
  ],
  declarations: [ProductoGestionComponent, ProductoFormComponent, ProductoListComponent],
  exports: [ProductoGestionComponent, ProductoFormComponent, ProductoListComponent],
  providers:[{provide: ProductoAbstractService, useClass: ProductoHttpService}]  
})
export class ProductosModule { }
