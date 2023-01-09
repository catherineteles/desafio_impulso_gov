import Head from "next/head";
// import { ImagemFundo, HomeBanner, Parcerias } from "@impulsogov/design-system";
import { InfoTab } from "@impulsogov/design-system";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <div>
        <section id="sobre">
          <Header />
          <InfoTab contentList={[
             {
              buttonLink: '/',
              buttonTitle: 'SOBRE SAÚDE MENTAL',
              leftTitle: 'Saúde Mental',
              rightContent: 'Uma plataforma gratuita, que utiliza bases de dados públicas para auxiliar na gestão dos serviços de saúde mental do município. Conheça mais sobre o trabalho realizado pela Impulso em parceria com o Instituto Cactus e o município de Aracaju (SE).',
              rightTitle: 'O que é a plataforma de indicadores de Saúde Mental?'
            },
            {
              buttonLink: '/2',
              buttonTitle: 'entenda',
              leftTitle: 'Glossário',
              rightContent: 'Acesse um siglário e a ficha técnica de nossos indicadores para compreender como eles são calculados, quais são as bases de dados que os alimentam, com qual periodicidade eles são atualizados e muito mais',
              rightTitle: 'Entenda como interpretar os indicadores'
            }
          ]} />
        </section>
      </div>

    </>
  )
}