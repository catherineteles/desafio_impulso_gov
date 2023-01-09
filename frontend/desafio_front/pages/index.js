import Head from "next/head";
import { useContext } from "react";
import { InfoTab } from "@impulsogov/design-system";
import AppContext from "../context_api/AppContext";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Footer from "../components/Footer";

export default function Home() {
  const {
    clicked
  } = useContext(AppContext)
  return (
    <>
      <div>
        <Header />
        <section id="sobre">
          { clicked && <Modal />}
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
        <Footer />
      </div>

    </>
  )
}