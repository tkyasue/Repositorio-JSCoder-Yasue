const pizza = [
    {nombre: 'Muzzarella', ingredientes:'Queso Muzzarella, Aceitunas', precio: 1000},
    {nombre: 'Jamon y Morrones', ingredientes:'Queso Muzzarella, Aceitunas, Jamon, Morrones', precio: 1300},
    {nombre: 'Huevo', ingredientes:'Queso Muzzarella, Aceitunas, Huevo', precio: 1100},
    {nombre: 'Jamon y Anana', ingredientes: 'Queso Muzzarella, Aceitunas, Jamon, Anana', precio: 1500}
];

    const extra = [
    {extra: 'Doble Muzzarella', precio: 150},
    {extra: 'Jamon',  precio: 150 },
    {extra: 'Huevo',  precio: 100},
    
];
n1 = pizza.nombre
n2 = extra.nombre

function comprar(n1, n2){
    let n1 = prompt('Bienvenid@! Que pizza le gustaria ordenar?')
    let n2 = prompt('Le gustaria añadir un extra? Las opciones son: Doble Muzzarella, Jamon o Huevo.')

    if (n1 = pizza.nombre && n2 == extra.extra) {
        alert('Su precio total seria ' +pizza.precio + extra.precio);
    }
    if (n1 = pizza.nombre && n2 != extra.extra) {
        alert('Su precio total seria ' +pizza.precio);
    }

}
comprar()