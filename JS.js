let box = document.querySelector('.box');

function show(pokemonlar){
    box.innerHTML = '';

    for(i = 0; i < pokemonlar.length; i++){
        let div = document.createElement('div');
        div.classList.add('div');
    
        let p = document.createElement('p')
        p.textContent = pokemonlar[i].name ;
        p.classList.add('p')
    
        let p3 = document.createElement('p')
        p3.textContent = pokemonlar[i].spawn_chance ;
        p3.classList.add('p3');
    
        let p2 = document.createElement('p')
        p2.textContent = pokemonlar[i].spawn_time ;
        p2.classList.add('p2');
    
        let h3 = document.createElement('h3')
        h3.textContent = pokemonlar[i].id ;
        h3.classList.add('h3');
    
        let h1 = document.createElement('h1')
        h1.textContent = pokemonlar[i].num ;
        h1.classList.add('h1');
    
        let im = document.createElement('img')
        im.src = pokemonlar[i].img ;
        im.classList.add('img');
    
        let ol = document.createElement('ol')
        ol.classList.add('ol');
    
        
    
    for(x = 0; x < pokemonlar[i].type.length; x++){
        let li = document.createElement('li')
        li.classList.add('li');
        li.textContent = pokemonlar[i].type[x];
        
        ol.appendChild(li)  
    }
   
    
    div.appendChild(p3)
    div.appendChild(h3)
    div.appendChild(h1)
    div.appendChild(p)
    div.appendChild(im)
    div.appendChild(ol)
    div.appendChild(p2)
    
    box.appendChild(div)
    }}
 show(pokemons)

let form  = document.querySelector('.form')
let input = document.querySelector('.input')

form.addEventListener('keyup', function(evt){
    evt.preventDefault('');
    let qiymat = input.value;
    let kalit = new RegExp(qiymat, 'gi');

    let qidirilganlar = pokemons.filter(function(x){
        return x.name.toString().match(kalit);
    });
    show(qidirilganlar)
});