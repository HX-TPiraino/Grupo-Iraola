import { Router } from "express"
import {getStatistics} from "../controlers/estadisticasGets.js"
import {getPeople} from "../controlers/personasGets.js"
import {postPeople} from "../controlers/personasPost.js"
import {deletePeople} from "../controlers/personasDelete.js"
import {updatePeople} from "../controlers/personasPut.js"
import {intro} from "../controlers/explicacionDentroApi.js"

const router = Router()

router.get("/personas", getPeople)
router.get("/estadisticas",getStatistics)
router.delete("/personas/:id", deletePeople)
router.put("/personas/:id", updatePeople)
router.post("/personas",postPeople)
router.get("/", intro)

export default router