import { CATEGORIS, FrameWorkAndLeguages } from "./categoris.ts"
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
import imgGit from "../assets/img/git-logo.png"
import imgPowerShell from "../assets/img/powerShell.png"
import imgResend from "../assets/img/resend_integration_logo.png"
import imgAWS from "../assets/img/aws.png"

export const dataFrameworks = [
  {
    id: FrameWorkAndLeguages.VueJs,
    name: "Vue.js",
    category: CATEGORIS.FrameWork,
    image: imgVue,
    rating: 5
  },
  {
    id: FrameWorkAndLeguages.NextJs,
    name: "Next.js",
    category: CATEGORIS.FrameWork,
    image: imgNext,
    rating: 2
  },
  {
    id: FrameWorkAndLeguages.ReactNative,
    name: "React Native",
    category: CATEGORIS.FrameWork,
    image: imgReacNative,
    rating: 2
  },
  {
    id: FrameWorkAndLeguages.NodeJs,
    name: "Node.js",
    category: CATEGORIS.FrameWork,
    image: imgNode,
    rating: 3
  },
  {
    id: FrameWorkAndLeguages.JavaScript,
    name: "Java script",
    category: CATEGORIS.Language,
    image: imgJavascritp,
    rating: 5
  },
  {
    id: FrameWorkAndLeguages.Stripe,
    name: "Stipe",
    category: CATEGORIS.PaymentService,
    image: imgStripe,
    rating: 2
  },
  {
    id: FrameWorkAndLeguages.FlutterFlow,
    name: "FlutterFlow",
    category: CATEGORIS.DevelopmentPlatform,
    image: flutterFlow,
    rating: 2
  },
  {
    id: FrameWorkAndLeguages.SOLID,
    name: "SOLID",
    category: CATEGORIS.SoftwareDesignPrinciples,
    image: imgSolid,
    rating: 5
  },
  {
    id: FrameWorkAndLeguages.Netsuite,
    name: "Netsuite",
    category: CATEGORIS.CloudERPPlatform,
    image: imgNetsuite,
    rating: 2
  },
  {
    id: FrameWorkAndLeguages.Libraries,
    name: "Libraries",
    category: CATEGORIS.Libraries,
    image: imgLibrerias,
    rating: 5
  },
  {
    id: FrameWorkAndLeguages.Supabase,
    name: "Supabase",
    category: CATEGORIS.DataBase,
    image: imgSupabase,
    rating: 4
  },
  {
    id: FrameWorkAndLeguages.CloudWays,
    name: "Cloud Ways",
    category: CATEGORIS.Server,
    image: imgCloudays,
    rating: 3
  },
  {
    id: FrameWorkAndLeguages.Vite,
    name: "Vite",
    category: CATEGORIS.BuildTool,
    image: imgVite,
    rating: 3
  },
  {
    id: FrameWorkAndLeguages.TypeScript,
    name: "Typescript",
    category: CATEGORIS.Language,
    image: imgTypeScript,
    rating: 3
  },
  {
    id: FrameWorkAndLeguages.Css,
    name: "Css",
    category: CATEGORIS.Language,
    image: imgCss,
    rating: 4
  },
  {
    id: FrameWorkAndLeguages.Git,
    name: "Git",
    category: CATEGORIS.VCS,
    image: imgGit,
    rating: 4
  },
  {
    id: FrameWorkAndLeguages.PowerShell,
    name: "PowerShell",
    category: CATEGORIS.CMD,
    image: imgPowerShell,
    rating: 4
  },
  {
    id: FrameWorkAndLeguages.Resend,
    name: 'Email API platform - Resend',
    category: CATEGORIS.ServiciosApi,
    image: imgResend,
    rating: 3
  },
  {
    id: FrameWorkAndLeguages.AWS,
    name: 'AWS',
    category: CATEGORIS.CloudPlatform,
    image: imgAWS,
    rating: 4
  }

]