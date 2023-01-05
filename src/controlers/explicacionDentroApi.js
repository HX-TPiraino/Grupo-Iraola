export const intro = async (_req,res) => {
   try{
        res.send("Bienvenido a la API de gestion de recurso Persona, a continuacion te detallo los endopints que podes usar <br/> Primero los GET <br/> /personas, este nos traera todas las personas dentro de nuestra DB <br/> /personas?country es un query con el que podremos buscar personas por pais <br/> /personas?name en este podremos buscar personas con un mismo nombre <br/> /estadisticas podremos ver las estadisticas de cuantos hombres y mujeres hay ademas del porcentaje de argentinos <br/> Otras Peticiones <br/> PUT /personas, enviando por body lo que queramos cambiar (unicamente mail y/0 nombre) <br/> DELETE /personas enviando el ID de la persona la borra de la base de datos <br/> POST /persona, enviando por body todos los campos requeridos nos postearia una persona ")
    } catch (error) {
        res.json({message:"Algo fallo contactate con el desarrollador"})
    }
}