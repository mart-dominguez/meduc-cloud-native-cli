import { Injectable } from '@angular/core';
import { Producto } from './model/producto';
import { Observable } from 'rxjs/Observable'
import { ProductoAbstractService } from './producto.abstract.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductoHttpService extends ProductoAbstractService {

//  private server:string="http://localhost:3000/";

  constructor(private http: HttpClient){
    super();
  }

  agregarProducto(producto: Producto): Observable<any> {
    return this.http.post("/api2/producto", producto);
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

}
