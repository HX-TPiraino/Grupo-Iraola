import { Persona } from "../models/Persona.js"

export const updatePeople = async (req , res ) => {
    try {   
        const { id } = req.params
        const {email,name} = req.body

        const persona = await Persona.findByPk(id)
        
        email ? persona.email = email : null
        name ? persona.name = name : null

        await persona.save()

        res.json(persona)
    } catch (error) {
        res.json({message:"No puede ser modificado por el siguiente error, " + error})  
    }
}