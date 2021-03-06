import { Producto } from './model/producto';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject';

export interface ProductoService {
    agregarProducto(producto:Producto): Observable<any>;    
    getProductos():Observable<Producto[]>;
    buscarPorId(id:number):Observable<Producto>;
    borrar(id:number): Observable<any>;
    actualizar(producto:Producto): Observable<any>;
    getProductoUpdated():Subject<Producto>;
    
}
