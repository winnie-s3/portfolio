import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { SiCsharp, SiNextdotjs, SiMysql } from "react-icons/si";
import { CardTech } from "./cardTech";

export function ListCardTech(){
  const languages = [
    { icon: FaHtml5, langName: "HTML5", langLevel: "3 anos, 6 projetos", skills: ["Semântica do HTML5", "Estruturação de páginas", "Formulários avançados", "Manipulação de mídia", "Tabelas avançadas", "Microdados", "Uso de frameworks responsivos", "Acessibilidade na web"] },
    { icon: FaCss3, langName: "CSS3", langLevel: "3 anos, 6 projetos", skills: ["Seletores e estilização", "Animações avançadas e transições CSS", "Pré-processadores CSS como SASS", "Layout e posicionamento", "Responsividade e escalabilidade", "Uso de frameworks como Bootstrap e Tailwind"] },
    { icon: FaJs, langName: "Javascript", langLevel: "3 anos, 6 projetos", skills: ["Manipulação do DOM e eventos", "Escopo de variáveis e funções", "Estruturas de controle", "Arrays e objetos", "Funções de ordem superior", "Requisições assíncronas e APIs", "Manipulação de formulários", "Manipulação básica de dados (JSON)"] },
    { icon: FaPhp, langName: "PHP", langLevel: "3 anos, 3 projetos", skills: ["Manipulação de dados de formulários e operações CRUD do MySQL", "Uso de sessões", "Prevenção de injeção de SQL", "Conceitos básicos de programação orientada a objetos", "Práticas básicas de segurança"] },
    { icon: SiCsharp, langName: "C# (WinForms)", langLevel: "3 anos, 5 projetos", skills: ["Criação de GUI", "Manipulação avançada de controles", "Manipulação eficiente de eventos", "Conexão e manipulação de banco de dados", "Implementação de lógica de negócios"] },
    { icon: FaReact, langName: "ReactJS", langLevel: "3 anos, 2 projetos", skills: ["Sintaxe JSX", "Criação e uso de componentes", "Gerenciamento de estado com useState", "Manipulação de eventos", "Renderização condicional", "Renderização de listas", "Props e prop drilling", "React Router básico para navegação", "Recuperação de dados com useEffect", "Conexão com banco de dados via API JSON"] },
    { icon: FaNodeJs, langName: "NodeJS", langLevel: "3 anos, 2 projetos", skills: ["Fundamentos e arquitetura do Node.js", "Criação e execução de aplicações", "Programação assíncrona com callbacks", "Criação de um servidor HTTP básico", "Manipulação de requisições e respostas HTTP", "Interação com bancos de dados", "Tratamento de erros", "Introdução aos middlewares em frameworks como Express", "Criação de APIs Restful", "Uso do Postman para APIs"] },
    { icon: SiNextdotjs, langName: "NextJS", langLevel: "3 anos, 3 projetos", skills: ["Estrutura e funcionamento básico de um aplicativo Next.js", "Renderização no lado do servidor (SSR) e renderização estática (SSG)", "Rotas dinâmicas e aninhadas", "Data fetching com getStaticProps, getServerSideProps e getInitialProps", "Uso de APIs internas (API routes)", "Configuração e uso de CSS-in-JS (styled-components, Emotion)", "Integração com bibliotecas de estado (Redux, Context API)", "Implementação de autenticação e autorização", "Otimização de desempenho e boas práticas de SEO", "Configuração personalizada do servidor Next.js e uso de middlewares"] },
    { icon: SiMysql, langName: "MySQL", langLevel: "3 anos, 6 projetos", skills: ["Compreensão avançada de arquitetura e internals do MySQL", "Domínio de instruções SQL complexas (subconsultas, junções avançadas, operações de set)", "Design e otimização de esquemas de banco de dados", "Indexação avançada e técnicas de otimização de consultas", "Administração de banco de dados (backups, restaurações, replicação)", "Gerenciamento de usuários e permissões", "Implementação de procedures, functions e triggers", "Configuração e gerenciamento de replicação e clustering", "Monitoramento de desempenho e tuning do servidor MySQL", "Migração e integração de dados entre diferentes sistemas de banco de dados"]}
  ];

    return(
        <div className="flex flex-wrap justify-center gap-6">
          {languages.map((language, index) => (
            <CardTech
              key={index}
              icon={language.icon}
              langName={language.langName}
              langLevel={language.langLevel}
              skills={language.skills}
            />
          ))}
        </div>
    )
}