import { Injectable } from '@angular/core';
import { Producto } from './model/producto';
import { Observable } from 'rxjs/Observable'
import { ProductoAbstractService } from './producto.abstract.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class ProductoHttpService extends ProductoAbstractService {

//  private server:string="http://localhost:3000/";

  constructor(private http: HttpClient){
    super();
  }

  private productoUpdated = new Subject<Producto>();  

  agregarProducto(producto: Producto): Observable<any> {
    return  this.http.post("/api2/producto", producto).
          flatMap(z => {
            console.log(z);
            this.productoUpdated.next(producto);
            return Observable.of(z);      
          });
  }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>("/api2/producto");
  }

  buscarPorId(id: number): Observable<Producto> {
    throw new Error("Method not implemented.");
  }
  borrar(id: number): Observable<any> {
    throw new Error("Method not implemented.");
  }
  actualizar(producto: Producto): Observable<any> {
    throw new Error("Method not implemented.");
  }

  getProductoUpdated():Subject<Producto>{
    return this.productoUpdated;
  }
}
