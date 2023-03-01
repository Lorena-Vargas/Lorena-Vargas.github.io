'use strict';

class IconoHabilidad extends HTMLElement {
    constructor() {
        super();
        this.#cargar();
    }

    #cargar() {
        const iconoRuta = this.getAttribute('src');
        const fantasma = this.attachShadow({mode: 'open'});

        fetch(iconoRuta)
        .then(respuesta => respuesta.text())
        .then(data => {fantasma.innerHTML = data;});
    }
}

export {IconoHabilidad};