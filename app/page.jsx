import { CardsContainer } from "@/components/cardsContainer";
import { DownloadCV } from "@/components/downloadCV";
import { Header } from "@/components/header";
import { ListCardProject } from "@/components/listCardProject";
import { ListCardTech } from "@/components/listCardTech";
import { MainContainer } from "@/components/mainContainer";
import { SectionContainer } from "@/components/sectionContainer";
import { TitleSection } from "@/components/titleSection";

export default function Home() {
  return (
    <div className="flex min-h-screen text-center flex-col items-center gap-6 sm:gap-8 p-4 md:py-10 md:px-10 lg:px-15">
      <Header />
      <MainContainer />

      <section className="sm:w-9/12" id="about">
        <TitleSection title="Sobre mim" />
        <p className="font-light text-sm sm:text-base">Como Desenvolvedora Full Stack, minha missão é impulsionar o sucesso dos seus negócios através de soluções digitais. Desenvolvo aplicações web e desktop que alavancam suas vendas, aumentam a visibilidade do seu trabalho e otimizam seus processos.</p>
      </section>

      <section className="w-full" id="tech">
        <SectionContainer>
          <TitleSection title="Tech skills" />
          <CardsContainer>
            <ListCardTech />
          </CardsContainer>
        </SectionContainer>
      </section>

      <section className="w-full" id="projects">
        <SectionContainer>
          <TitleSection title="Projetos" />
          <CardsContainer>
            <ListCardProject />
          </CardsContainer>
        </SectionContainer>
      </section>

      <section className="w-full" id="cv">
        <SectionContainer>
          <TitleSection title="Baixe meu CV" />
          <CardsContainer>
            <DownloadCV />
          </CardsContainer>
        </SectionContainer>
      </section>
    </div>
  );
}
