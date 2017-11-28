import { Producto } from './model/producto';
import { Observable } from 'rxjs/Observable'
import { ProductoService } from './producto.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


export abstract class ProductoAbstractService  implements ProductoService{
    abstract agregarProducto(producto: Producto): Observable<any> ;
    
    abstract getProductos(): Observable<Producto[]> ;

    abstract buscarPorId(id: number): Observable<Producto> ;

    abstract borrar(id: number): Observable<any> ;

    abstract actualizar(producto: Producto): Observable<any>    ;
    
    abstract getProductoUpdated():Subject<Producto>;
}
