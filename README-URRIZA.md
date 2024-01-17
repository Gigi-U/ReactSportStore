instalacion react shuffle:
comando: npm install react-shuffle

- tutorial del que me guié: 
https://www.youtube.com/watch?v=VzF2iTTc0MA&t=265s


- para agregar las imágenes del calzado no supe hacerlo de otro modo que importando las url al archivo data.json

_________________________________________________________________________________________________________________________________________

FLUJO DE LA APLICACIÓN : 

1) el padre de todos es App. Esta conformado x Cabecera y Listado(vemos Listado en App xq como esá formado x el conj. de items y mapea al json , los conteniene). 

2) Listado recibe la info del data.json. Lo q hace es: recibir la info del json q va a tener cada item, la mapea y se va a renderizar para crear tantas tarjetas como ids tenga en json. (recibe a través de import la info de json, asi como la info del item)

3) los item crean la funcionalidad de los botones que van a ir restando el stock ( a traves de un useState y una funcion (clickCompra) que lo setee). 
En item se va a incluir tmb el contador "aumentar" (que va a servir para sumar los items del carrito en cabecera). Se va a icluir, no en el codigo renderizar sino, en la función clickCompra. 

Tambien incluyo en item los cambios de estado de los botones(COMPRAR/ SIN STOCK), el detalle de stock que esta en el span  y se pone en rojo sólo cuando no hay más productos, y el deshabilitador de botón, cuando no quedan más productos para comprar.

4) Contador. El contador se arma en App con un useState y la función "aumentar" para que se setee el nro de elementosComprados. 

Lo que hace es sumar 1 elementosComprados cada vez que hacemos el click de botón que seteamos en item, entonces cada vez q el usuario hace click, esa info se suma al contador que irá en Cabecera. 

Una vez q App crea el contador, se  lo incluye a Listado ( entra x parametro y se  incluye en el codigo que se va a renderizar. 

Por otro lado a  Cabezal le agregas (no la función  "aumentar" sino ya directamente)  el dato del useState (elementosComprados) que fueron seteado gracias a esa funcion  aumentar.  

5) por último, para recordar: 
App tiene conectar con sus hijos. (recibe a través de import la info de ambos)


 Entonces...  Cabecera y item tienen que llevar en su parametro (props)
 Listado debe llevar en su parametro el contador ({aumentar}) que fue creada en App.


