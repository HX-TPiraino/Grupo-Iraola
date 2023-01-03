import { Persona } from "../models/Persona.js"

export const getStatistics = async (_req,res) => {
    try {
        const results = {}
        const masc = await Persona.findAll({
            where:{
                gender:"Masculino"
            }
        })
        const fem = await Persona.findAll({
            where:{
                gender:"Femenino"
            }
        })
        const args = await Persona.findAll({
            where:{
                country:"Argentina"
            }
        })
        const total = await Persona.findAll({})
        const porcentaje = (args.length / total.length) * 100

        console.log(masc,fem,args)
        results.cantidad_mujeres = fem.length
        results.cantidad_hombres = masc.length
        results.porcentaje_argentinos = porcentaje.toString().slice(0,4) + "%"
        res.json(results)
    } catch (error) {
        res.json({message:"No se pudieron traer estadisticas 😓"})
    }
}