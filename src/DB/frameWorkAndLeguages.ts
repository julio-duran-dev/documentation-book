import { CATEGORIS } from "./categoris.ts"
import imgVue from "../assets/logo.svg"
import imgNext from "../assets/img/nextjs.jpeg"
import imgReacNative from "../assets/img/reactnative.svg"
import imgJavascritp from "../assets/img/javascritp.webp"
import imgNode from "../assets/img/node.webp"
import imgStripe from "../assets/img/stripe.webp"
import flutterFlow from "../assets/img/flutterflow.png"
import imgSolid from "../assets/img/solid.png"
import imgNetsuite from "../assets/img/netsuite.webp"
import imgLibrerias from "../assets/img/librerias.jpg"
import imgSupabase from "../assets/img/supabase.webp"
import imgCloudays from "../assets/img/cloudways.png"
import imgVite from "../assets/img/vite.png"
import imgTypeScript from "../assets/img/Typescript.svg.png"
import imgCss from "../assets/img/Css.png"

export const dataFrameworks = [
  {
    id: 1,
    name: "Vue.js",
    category: CATEGORIS.FrameWork,
    image: imgVue,
    rating: 5
  },
  {
    id: 2,
    name: "Next.js",
    category: CATEGORIS.FrameWork,
    image: imgNext,
    rating: 2
  },
  {
    id: 3,
    name: "React Native",
    category: CATEGORIS.FrameWork,
    image: imgReacNative,
    rating: 2
  },
  {
    id: 4,
    name: "Node.js",
    category: CATEGORIS.FrameWork,
    image: imgNode,
    rating: 3
  },
  {
    id: 5,
    name: "Java script",
    category: CATEGORIS.Language,
    image: imgJavascritp,
    rating: 5
  },
  {
    id: 6,
    name: "Stipe",
    category: CATEGORIS.PaymentService,
    image: imgStripe,
    rating: 2
  },
  {
    id: 7,
    name: "FlutterFlow",
    category: CATEGORIS.DevelopmentPlatform,
    image: flutterFlow,
    rating: 2
  },
  {
    id: 8,
    name: "SOLID",
    category: CATEGORIS.SoftwareDesignPrinciples,
    image: imgSolid,
    rating: 5
  },
  {
    id: 9,
    name: "Netsuite",
    category: CATEGORIS.CloudERPPlatform,
    image: imgNetsuite,
    rating: 2
  },
  {
    id: 10,
    name: "Libraries",
    category: CATEGORIS.Libraries,
    image: imgLibrerias,
    rating: 5
  },
  {
    id: 11,
    name: "Supabase",
    category: CATEGORIS.DataBase,
    image: imgSupabase,
    rating: 4
  },
  {
    id: 12,
    name: "Cloud Ways",
    category: CATEGORIS.Server,
    image: imgCloudays,
    rating: 3
  },
  {
    id: 13,
    name: "Vite",
    category: CATEGORIS.BuildTool,
    image: imgVite,
    rating: 3
  },
  {
    id: 14,
    name: "Typescript",
    category: CATEGORIS.Language,
    image: imgTypeScript,
    rating: 3
  },
  {
    id: 15,
    name: "Css",
    category: CATEGORIS.Language,
    image: imgCss,
    rating: 4
  },
]