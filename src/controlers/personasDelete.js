import { Persona } from "../models/Persona.js"

export const deletePeople = async (req,res) => {
    const {id} = req.params
    try { 
        const deleted = await Persona.destroy({
            where:{
                id:id
            }
        })
        if(!deleted) {
            throw("No se pudo borrar, no existe ese id")
        }
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({message:"ocurrio el siguiente error " + error})
    }
}