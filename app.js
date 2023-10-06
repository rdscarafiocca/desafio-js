/* 
Iniciar un proyecto que luego será integrador:
(Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador o reutilizarás algun proyecto de html y css para ir introduciendo nuevas funcionalidades.)

    Mediante prompts deberás incorporar datos y mediante alerts deberás mostrar resultados que se obtendrán utilizando condicionales, ciclos y funciones.
    Ej: si tenías productos a la venta pedirás uno a uno el código de los productos, informarás sobre el precio del mismo y lo sumarás al total hasta que el usuario escriba “salir”

Otros ejemplos:

    Calcular costo total de productos y/o servicios seleccionados por el usuario.
    Calcular pagos en cuotas sobre un monto determinado.
    Calcular valor final de un producto seleccionado en función de impuestos y descuentos.
    Calcular tiempo de espera promedio en relación con la cantidad de turnos registrados.
    Calcular edad promedio de personas registradas.
    Calcular nota final de alumnos ingresados. 
*/

class Producto{
    constructor(descripcion, codigo, precio, stock){
        this.descripcion = descripcion;
        this.codigo = codigo;
        this.precio = precio;
        this.stock = stock;
    }
    checkearStock(){
        if (this.stock > 0)
            return true;
        return false;
    }
}
class Canasta{
    constructor(){
        this.lista = '';
        this.total = 0;
        this.cantidadProductos = 0;
    }
    //Devuelve true si se pudo efectuar la operación (si hay stock). Si no hay stock, devuelve false.
    agregarALista(producto){
        if (!producto.checkearStock())
            return false;
        this.lista += producto.descripcion + ' - $' + producto.precio + '\n';
        this.total += producto.precio;
        this.cantidadProductos++;
        producto.stock--;
        return true; 
    }
    obtenerResumenParcial(){
        return 'Llevás agregado(s) en total: ' + this.cantidadProductos + ' productos\n' + this.lista + 'Por un monto total de $' + this.total;
    }
}

const canasta = new Canasta();

//Parámetros: descripcion del producto, código, precio, cantidad en stock
const cpuI3 = new Producto("Procesador Intel I3", 1, 120000, 2);
const cpuI5 = new Producto("Procesador Intel I5", 2, 200000, 10);
const cpuI7 = new Producto("Procesador Intel I7", 3, 350000, 5);

const ram4gb = new Producto("Memoria RAM 4GB", 4, 18000, 22); 
const ram8gb = new Producto("Memoria RAM 8GB", 5, 30000, 19); 
const ram16gb = new Producto("Memoria RAM 16GB", 6, 50000, 5);

const atx400 = new Producto("Fuente ATX 400W", 7, 40000, 15);
const atx600 = new Producto("Fuente ATX 600W", 8, 60000, 21);
const atx800 = new Producto("Fuente ATX 800W", 9, 80000, 4);


let codigoProducto = pedirCodigoAlUsuario();

while (codigoProducto != 0){

    switch(codigoProducto){
        case cpuI3.codigo: procesarCompra(cpuI3);
            break;
        case cpuI5.codigo: procesarCompra(cpuI5);
            break;
        case cpuI7.codigo: procesarCompra(cpuI7);
            break;

        case ram4gb.codigo: procesarCompra(ram4gb);
            break;
        case ram8gb.codigo: procesarCompra(ram8gb);
            break;
        case ram16gb.codigo: procesarCompra(ram16gb);
            break;
        
        case atx400.codigo: procesarCompra(atx400);
            break;
        case atx600.codigo: procesarCompra(atx600);
            break;
        case atx800.codigo: procesarCompra(atx800);
            break;

        default:
            alert('Código no válido');
    }

    codigoProducto = pedirCodigoAlUsuario();
}

if (canasta.cantidadProductos > 0)
    alert("Realizaste una compra de: " + canasta.cantidadProductos + " producto(s), por una suma total de $" + canasta.total + ".\nGracias por elegirnos!");

    
//Agrega el item (si hay stock) y muestra el resultado del proceso de compra.
function procesarCompra(producto){
    if (canasta.agregarALista(producto))
        alert(canasta.obtenerResumenParcial());
    else 
        alert("No hay stock del producto");
}
//Función de entrada de usuario.
function pedirCodigoAlUsuario(){
    let codigo = parseInt(prompt("Ingrese el código del producto a comprar (0 para salir):\n"
                        + cpuI3.codigo + ' -> ' + cpuI3.descripcion + '\n'
                        + cpuI5.codigo + ' -> ' + cpuI5.descripcion + '\n'
                        + cpuI7.codigo + ' -> ' + cpuI5.descripcion + '\n'
                        + ram4gb.codigo + ' -> ' + ram4gb.descripcion + '\n'
                        + ram8gb.codigo + ' -> ' + ram8gb.descripcion + '\n'
                        + ram16gb.codigo + ' -> ' + ram16gb.descripcion + '\n'
                        + atx400.codigo + ' -> ' + atx400.descripcion + '\n'
                        + atx600.codigo + ' -> ' + atx600.descripcion + '\n'
                        + atx800.codigo + ' -> ' + atx800.descripcion + '\n'
                        ));
    return codigo;
}