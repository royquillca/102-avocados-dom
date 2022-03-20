/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
// import style from './index.css';


const baseUrl = 'https://platzi-avo.vercel.app';

const appNode = document.querySelector('div#app');

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: 'currency',
        currency: 'USD',
        // currency: 'GBP',
    }).format(price);

    return newPrice;
}
//Intl
//1.- Fomato de fechas
// 2.- Formato de monedas


// web api
//Conexion al server
// procesar la respuesta, y convertir a JSON
// JSON --> Data Renderizar info en el browser

window.fetch(`${baseUrl}/api/avo`)
    .then(res => res.json())
    .then(({ data }) => {
        const allItems = [];
        data.forEach( item => {
            // Crear imagen
            const image = document.createElement('img');
            // URL de la imagen
            image.src = `${baseUrl + item.image}`;
            //clase de la imagen
            image.className = 'container__img'
            
            // crear titulo
            const title = document.createElement('h2');
            title.textContent = item.name;
            title.className = 'container__img-title'
            // crear precio
            const price = document.createElement('div');
            price.className = 'container__price'       
            price.textContent = formatPrice(item.price);
            
            const container = document.createElement('div');
            container.className = 'container'
            container.append( image, title, price );
            
            allItems.push(container)
            appNode.append( ...allItems )
        })
    })

