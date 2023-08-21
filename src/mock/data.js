
const list= [   
    {   id:'1', 
        name: 'Calzas',
        descripcion: 'Calzas negras con bolsillos',
        imag: 'https://i.postimg.cc/bwBvBqnt/calza-larga-con-bolsillo-negra-1.jpg',
        precio: 2000,
        stock: 10,
        Categoria:'Calzas'
    },
    {    id: '2',
        name:'Calza',
        descripcion: 'Calza gris',
        imag: 'https://i.postimg.cc/TwrY1m4V/images.jpg',
        precio: 2000,
        stock: 10,
        Categoria:'Calzas'
    },
    {   id: '3',
        name: 'Calza',
        descripcion: 'Claza bordo sin costuras',
        imag: 'https://i.postimg.cc/J75zWNJm/GBLTLBOF.jpg',
        precio: 2000,
        stock: 10,
        Categoria:'Calzas'
    },
    {   id: '4',
        name: 'Tops',
        descripcion: 'Top color negro con tiras cruzadas',
        imag: 'https://i.postimg.cc/26TM0Sbp/Top-Sujetador-Tiras-Negro-2.jpg',
        precio: 1500,
        stock: 10,
        Categoria:'Tops'
    },
    {    id: '5',
        name: 'Tops',
        descripcion: 'Top blanco liso',
        imag: 'https://i.postimg.cc/zGWQ9jbF/sujetador-top-deportivo-mrwod-blanco.jpg',
        precio: 1500,
        stock: 10,
        Categoria:'Tops'
    },
    {   id: '6', 
        name: 'Tops', 
        descripcion: "Top rosa liso",
        imag: 'https://i.postimg.cc/Qt6YpYwh/71z3jc-N7b-L-AC-UY1100.jpg',
        precio: 1500,
        stock: 10,
        Categoria:'Tops'
    },
    {    id: '7',
        name: 'Tops',
        descripcion: 'Top negro con estampa',
        imag: 'https://i.postimg.cc/s2sTbRR3/puma-sujetador-deportivo-elastico-estampado.jpg',
        precio: 1500,
        stock: 10,
        Categoria:'Tops'
    },
                
    {   id: '8',
        name: 'Buzo',
        descripcion: 'Buzo negro basico con capucha',
        imag: 'https://i.postimg.cc/9QGxxQKx/255550011-BT-99-2136.jpg',
        precio: 4000,
        stock: 10,
        Categoria:'Buzos'
    },
                
    {    id: '9',
        name: 'Buzo',
        descripcion: 'Buzo blanco con letras negras con capucha',
        imag: 'https://i.postimg.cc/2ybGnkn7/buzo-relaxed-crudo.jpg',
        precio: 4000,
        stock: 10,
        Categoria:'Buzos'
    },
               
    {   id: '10',
        name: 'Buzo',
        descripcion: 'Buzo corto negro sin capucha',
        imag: 'https://i.postimg.cc/Hnq22q2D/Buzo-Negro-Mujer-807060380608331.jpg',
       precio: 4000,
       stock: 10,
       Categoria:'Buzos'
    }
    
    ]
    
    
    export const getProductos =()=>{
        return new Promise((resolve,reject) => {
           let error = false 
            setTimeout (()=>{
            if(error){
                reject('Intente mas tarde')
            }else{
                resolve(list)
            }
        },0)
        })
    }
    
    export const getItem = (id) => {
        return new Promise ((resolve) =>{
           setTimeout(()=>{
            resolve(list.find((item)=> item.id === id))
           },1500)
     })
    }
    
    export const getProductosCategoria = (Categoria) =>{
        return new Promise ((res)=>{
            const productos = list.filter(
                (producto)=> producto.Categoria === Categoria
            );
            setTimeout(()=>{
                res(productos);
            },0);
        });
    }

