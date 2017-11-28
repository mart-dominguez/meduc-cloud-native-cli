import { Component, OnInit } from '@angular/core';
import {Producto } from '../model/producto';
import { ProductoAbstractService } from '../producto.abstract.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  public listaProductos:Producto[]=[];
  
  constructor(private miServicio:ProductoAbstractService) { }
  
    ngOnInit() {
      this.miServicio.getProductos().subscribe((lista)=>{
        this.listaProductos=lista;
      });    
      this.miServicio.getProductoUpdated().subscribe(t => this.refresh());
    }
  
    ngOnDestroy() {
      this.miServicio.getProductoUpdated().unsubscribe();
    }
  
    refresh(){    
      this.miServicio.getProductos()
      .subscribe(
        (lista) =>{this.listaProductos =  lista.slice()}
      );
      console.log(this.listaProductos);
    }

}
