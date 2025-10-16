let contenedor = document.getElementById("contenedor");
let contenido = "";
tienda.forEach(disco => {
    contenido += `
    <div class = "card">
        <img 
        class="card-img" 
        src="${disco.caratula}" 
        alt="${disco.titulo}"
        onerror="this.src='img/disco_defaut.jpg'; this.classList.add('error')"
        >
        <div class="card-container">
        <h2>${disco.titulo}</h2>
        <p>${disco.artista}</p>
        <div class="card-info">
            <spam class="pais">${disco.pais}</spam>
            <p>${disco.publicacion}</p>
        </div>
        <p class="copias">📀${disco.copias} k copias vendidias</p>
        <h2>€${disco.precio.toFixed(2)}</h2>
        </div>
    </div>
    `;
})
contenedor.innerHTML = contenido;