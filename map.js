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

const pasarAlturaCms = personas => {
    // personas.altura *= 100;
    return {
        ...personas,
        altura: personas.altura * 100
    }
}
var personasCms = personas.map(pasarAlturaCms)

console.log(personasCms);
console.log(personas);
