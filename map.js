let personas = [
    {
        "nombre": "Carlos",
        "altura": 1.72
    },
    {
        "nombre": "Emilio",
        "altura": 1.22
    },
    {
        "nombre": "Floremy",
        "altura": 1.52
    },
]

// Para que retorne un valor de debe colocar la funcion ({})
const pasarAlturaCms = personas => ({
    ...personas,
    altura: personas.altura * 100
})


var personasCms = personas.map(pasarAlturaCms)

console.log(personasCms);
console.log(personas);
