import vidaEternaPortada from "../assets/img/imgDB/vidaEterna/vidaEterna1.jpg"
import laOracionPortada from "../assets/img/imgDB/laOracion/oracion.jpg"
import { TEMAS_BIBLICOS_ID } from "./idTemasBiblicos"

export const temas_biblicos = [
  {
    id: TEMAS_BIBLICOS_ID.VIDA_ENTER,
    name: 'Promesa de la vida Eterna',
    category: "Esperanza",
    image: vidaEternaPortada,
    rating: 5,
    routeName: 'vidaEterna'
  },
  {
    id: TEMAS_BIBLICOS_ID.LA_ORACION,
    name: 'La Oracion',
    category: "Esperanza",
    image: laOracionPortada,
    rating: 5,
    routeName: 'laOracion'
  }
]