import { FaHtml5, FaJs, FaPhp, FaReact } from "react-icons/fa";
import { CardTech } from "./cardTech";
import { CardProject } from "./cardProjects";

export function ListCardProject(){
  const projects = [
    { projectName: "Dashboard de vendas", projectDescription: "HTML, CSS, Javascript", projectImage: "" },
    { projectName: "Rate Movies", projectDescription: "C#, .NET", projectImage: "https://user-images.githubusercontent.com/74850021/211688560-be8a08b6-e49e-458d-bc62-a6fd9dee77a2.png", projectLink: "https://github.com/winnie-s3/Rate-Movies" },
    { projectName: "WindFlowershop", projectDescription: "HTML, CSS, Javascript", projectImage: "https://user-images.githubusercontent.com/74850021/194457071-81b98a63-80ba-4a66-837c-55992d1299f3.png", projectLink: "https://winnie-s3.github.io/Wind-Flowershop/" },
  ];

    return(
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {projects.map((project, index) => (
            <CardProject
              key={index}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              projectImage={project.projectImage}
            />
          ))}
        </div>
    )
}