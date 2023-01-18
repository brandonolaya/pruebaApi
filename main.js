const titulo1 = document.querySelector(".titulo1")
const descripcion1 = document.querySelector(".descripcion1")
const imagen1 = document.querySelector(".imagen1")

const titulo2 = document.querySelector(".titulo2")
const descripcion2 = document.querySelector(".descripcion2")
const imagen2 = document.querySelector(".imagen2")

const titulo3 = document.querySelector(".titulo3")
const descripcion3 = document.querySelector(".descripcion3")
const imagen3 = document.querySelector(".imagen3")

const titulo4 = document.querySelector(".titulo4")
const descripcion4 = document.querySelector(".descripcion4")
const imagen4 = document.querySelector(".imagen4")

const titulo5 = document.querySelector(".titulo5")
const descripcion5 = document.querySelector(".descripcion5")
const imagen5 = document.querySelector(".imagen5")

const titulo6 = document.querySelector(".titulo6")
const descripcion6 = document.querySelector(".descripcion6")
const imagen6 = document.querySelector(".imagen6")

const titulo7 = document.querySelector(".titulo7")
const descripcion7 = document.querySelector(".descripcion7")
const imagen7 = document.querySelector(".imagen7")

const titulo8 = document.querySelector(".titulo8")
const descripcion8 = document.querySelector(".descripcion8")
const imagen8 = document.querySelector(".imagen8")

const titulo9 = document.querySelector(".titulo9")
const descripcion9 = document.querySelector(".descripcion9")
const imagen9 = document.querySelector(".imagen9")

const titulo10 = document.querySelector(".titulo10")
const descripcion10 = document.querySelector(".descripcion10")
const imagen10 = document.querySelector(".imagen10")

// function getNasa(){
//     fetch("https://images-api.nasa.gov/search?q=apollo%2011")
//     .then((res) => res.json())
//     .then((data) => console.log(data['collection']['items'][1]['data'][0]['title']));

// }




function getNasa(){
    fetch("https://images-api.nasa.gov/search?q=apollo%2011")
    .then((res) => res.json())
    .then((data) => {
        tablaNasa(data)
    });

}




// //console.log(data['collection']['items'][0]['data'][0]['title'])
// //console.log(data['collection']['items'][0]['data'][0]['description'])
// //console.log(data['collection']['items'][0]['links'][0]['href'])

function tablaNasa(evento){
    
    const h1 = document.createElement('h4');
    h1.textContent = evento['collection']['items'][0]['data'][0]['title'];

    const spana1 = document.createElement('p');
    spana1.textContent = evento['collection']['items'][0]['data'][0]['description'];

    const img1 = document.createElement('img');
    img1.src = evento['collection']['items'][0]['links'][0]['href'];

    titulo1.appendChild(h1)
    descripcion1.appendChild(spana1)
    imagen1.appendChild(img1)
   
    

    const h2 = document.createElement('h4');
    h2.textContent = evento['collection']['items'][1]['data'][0]['title'];

    const spana2 = document.createElement('p');
    spana2.textContent = evento['collection']['items'][1]['data'][0]['description'];

    const img2 = document.createElement('img');
    img2.src = evento['collection']['items'][1]['links'][0]['href'];

    titulo2.appendChild(h2)
    descripcion2.appendChild(spana2)
    imagen2.appendChild(img2)



    const h3 = document.createElement('h4');
    h3.textContent = evento['collection']['items'][2]['data'][0]['title'];

    const spana3 = document.createElement('p');
    spana3.textContent = evento['collection']['items'][2]['data'][0]['description'];

    const img3 = document.createElement('img');
    img3.src = evento['collection']['items'][2]['links'][0]['href'];

    titulo3.appendChild(h3)
    descripcion3.appendChild(spana3)
    imagen3.appendChild(img3)



    const h4 = document.createElement('h4');
    h4.textContent = evento['collection']['items'][3]['data'][0]['title'];

    const spana4 = document.createElement('p');
    spana4.textContent = evento['collection']['items'][3]['data'][0]['description'];

    const img4 = document.createElement('img');
    img4.src = evento['collection']['items'][3]['links'][0]['href'];

    titulo4.appendChild(h4)
    descripcion4.appendChild(spana4)
    imagen4.appendChild(img4)


    const h5 = document.createElement('h4');
    h5.textContent = evento['collection']['items'][4]['data'][0]['title'];

    const spana5 = document.createElement('p');
    spana5.textContent = evento['collection']['items'][4]['data'][0]['description'];

    const img5 = document.createElement('img');
    img5.src = evento['collection']['items'][4]['links'][0]['href'];

    titulo5.appendChild(h5)
    descripcion5.appendChild(spana5)
    imagen5.appendChild(img5)


    const h6 = document.createElement('h4');
    h6.textContent = evento['collection']['items'][5]['data'][0]['title'];

    const spana6 = document.createElement('p');
    spana6.textContent = evento['collection']['items'][5]['data'][0]['description'];

    const img6 = document.createElement('img');
    img6.src = evento['collection']['items'][5]['links'][0]['href'];

    titulo6.appendChild(h6)
    descripcion6.appendChild(spana6)
    imagen6.appendChild(img6)


    const h7 = document.createElement('h4');
    h7.textContent = evento['collection']['items'][6]['data'][0]['title'];

    const spana7 = document.createElement('p');
    spana7.textContent = evento['collection']['items'][6]['data'][0]['description'];

    const img7 = document.createElement('img');
    img7.src = evento['collection']['items'][6]['links'][0]['href'];

    titulo7.appendChild(h7)
    descripcion7.appendChild(spana7)
    imagen7.appendChild(img7)


    const h8 = document.createElement('h4');
    h8.textContent = evento['collection']['items'][7]['data'][0]['title'];

    const spana8 = document.createElement('p');
    spana8.textContent = evento['collection']['items'][7]['data'][0]['description'];

    const img8 = document.createElement('img');
    img8.src = evento['collection']['items'][7]['links'][0]['href'];

    titulo8.appendChild(h8)
    descripcion8.appendChild(spana8)
    imagen8.appendChild(img8)


    const h9 = document.createElement('h4');
    h9.textContent = evento['collection']['items'][8]['data'][0]['title'];

    const spana9 = document.createElement('p');
    spana9.textContent = evento['collection']['items'][8]['data'][0]['description'];

    const img9 = document.createElement('img');
    img9.src = evento['collection']['items'][8]['links'][0]['href'];

    titulo9.appendChild(h9)
    descripcion9.appendChild(spana9)
    imagen9.appendChild(img9)


    const h10 = document.createElement('h4');
    h10.textContent = evento['collection']['items'][9]['data'][0]['title'];

    const spana10 = document.createElement('p');
    spana10.textContent = evento['collection']['items'][9]['data'][0]['description'];

    const img10 = document.createElement('img');
    img10.src = evento['collection']['items'][9]['links'][0]['href'];

    titulo10.appendChild(h10)
    descripcion10.appendChild(spana10)
    imagen10.appendChild(img10)

//     const tr = document.createElement('tr')
//     const td = document.createElement('td')
//     const div = document.createElement('div')

//     div.appendChild(h4)
//     div.appendChild(span)
//     div.appendChild(img)

}

getNasa()










// function getNasa(done){
//     const API_URL = fetch("https://images-api.nasa.gov/search?q=apollo%2011");
//     API_URL
//         .then(response => response.json())
//         .then(data =>{
//             done(data)
//     });
// }

// getNasa(data =>{
    
//     console.log(data)
//     data.API_URL.forEach(eventos => {
//         const article = document.createRange().createContextualFragment(/*html*/`
//         <article>
//                     <tr>
          
//                         <td>
//                           <h4>${eventos['collection']['items'][0]['data'][0]['title']}/h4>
//                         </td>
                    
//                         <td> 
//                           <span>${eventos['collection']['items'][0]['data'][0]['description']}</span>
//                         </td>
                    
//                         <td>
//                           <div class="image-container">
//                               <img src="${eventos['collection']['items'][0]['links'][0]['href']}" alt="Apollo 11">
//                           </div>
//                         </td>
//                       </tr>
//                 </article>
//         `);

//         const main = document.querySelector("tbody")
//     });
// })













// const HTMLResponse = document.querySelector("NASA");
// const tpl = document.createDocumentFragment();

// fetch(`${URL}/users`)
//     .then(reponse => reponse.json())
//     .then((users) =>{
//         users.forEach(user =>{
//             let elem= document.createElement('li');
//             elem.appendChild(
//                 document.createTextNode())
//         })
//     })



