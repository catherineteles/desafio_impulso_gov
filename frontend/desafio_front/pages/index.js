import Head from "next/head";
import { ImagemFundo, HomeBanner, Parcerias } from "@impulsogov/design-system";
import { InfoTab } from "@impulsogov/design-system";

import { HOME } from "../querys/HOME";
import { getData } from "../services/getData";

export async function getStaticProps() {
  const res = [
    await getData(HOME)
  ];

  return {
    props: {
      res: res
    }
  }
}

export default function Home({res}) {
  return (
    <>
      <div style={{ backgroundColor: "#1B2D82" }}>
        <section id="sobre">
          <InfoTab contentList={[
            {
              leftTitle: res[0].infoTabs[0].leftTitle,
              rightTitle: res[0].infoTabs[0].rigthTitle,
              rightContent: res[0].infoTabs[0].content,
              buttonTitle: res[0].infoTabs[0].buttonTitle,
              buttonLink: res[0].infoTabs[0].link
            },
            {
              leftTitle: res[0].infoTabs[1].leftTitle,
              rightTitle: res[0].infoTabs[1].rigthTitle,
              rightContent: res[0].infoTabs[1].content,
              buttonTitle: res[0].infoTabs[1].buttonTitle,
              buttonLink:res[0].infoTabs[1].link
            },
          ]} />
        </section>
      </div>

    </>
  )
}