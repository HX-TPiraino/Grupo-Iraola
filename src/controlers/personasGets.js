import { Persona } from "../models/Persona.js"

export const getPeople = async (req,res) => {
    const {name,country} = req.query
    if(name){
        res.json(await getPeopleByNameOrCountry(name,"name"))
    }
    else if (country) {
        res.json(await getPeopleByNameOrCountry(country,"country"))
    }
    else if (!country && !name) {
        try { 
            const personas = await Persona.findAll()
            if(personas.length) {
                res.json(personas)
            }
            else {
                res.send("No hay personas cargadas")
            }
        } catch (error) {
            res.status(500).json({message:"ocurrio el siguiente error " + error})
        }
    }
}

const getPeopleByNameOrCountry = async (searchFor, typeOfSearch) => {
    try { 
        if (typeOfSearch === "name") {
            const personas = await Persona.findAll({
                where: {
                    name: searchFor
                }
            })
            if(personas.length) {
                return (personas)
            }
            else {
                return ({message: "Nada se pudo ajustar a tu busqueda"})
            }
        }
        else {
            const personas = await Persona.findAll({
                where: {
                    country: searchFor
                }
            })
            if(personas.length) {
                return (personas)
            }
            else {
                return ({message: "Nada se pudo ajustar a tu busqueda"})
            }
        }
    } catch (error) {
        return ({message:"ocurrio el siguiente error " + error})
    }
}