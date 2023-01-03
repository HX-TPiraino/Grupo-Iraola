import { Persona } from "../models/Persona.js"

export const postPeople = async (req, res) => {
    const { name, surname, age, gender, country, identificationType, identificationNumber,email } = req.body
    try {
        if (age >= 18) {
            const id = `${identificationType}_${identificationNumber}_${(country.slice(0, 3)).toUpperCase()}_${gender.slice(0, 1)}`
            const persona = await Persona.create({
                id,
                name,
                surname,
                age,
                gender,
                country,
                identificationType,
                identificationNumber,
                email
            })
            res.json(persona)
        }
        else {
            res.json({message:name + " debe de ser mayor para ser agregado"})
        }
    } catch (error) {
        res.json({message: name + " no puede ser añadido por el siguiente error, " + error})
    }

}