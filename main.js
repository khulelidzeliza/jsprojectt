let inputs = document.querySelectorAll('input');
let search = document.querySelector('.btn');
let section = document.querySelector('section');
 
function fetchData( ){
    let apiUrl = `https://api.escuelajs.co/api/v1/products/?price_min=${inputs[0].value}&price_max=${inputs[1].value}`;
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(response => {renderer(response);
})
    .catch(error => console.error('Error fetching data:', error));
}

search.addEventListener('click' , fetchData);
 
function renderer(list){

    section.innerHTML = ""
    list.forEach(item => {
        if ( 
            item.title.includes(inputs[2].value.toLowerCase())){
            section.innerHTML += `
               <div class="card" style="width: 18rem;">
               <img src="${item.image}" class="card-img-top" alt="...">
               <div class="card-body">
               <h5 class="card-title">${item.title}</h5>
               <h5 class="card-title">${item.price}$</h5>
               <h5 class="card-title">${item.category}</h5>
               <a href="#" class="btn btn-primary">Buy now</a>
            </div>
          </div>    
            `;
        } 
    });
}