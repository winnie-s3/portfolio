import { FaHtml5, FaJs, FaPhp, FaReact } from "react-icons/fa";
import { CardTech } from "./cardTech";
import { CardProject } from "./cardProjects";

export function ListCardProject(){
  const projects = [
    { projectName: "Rede Social Bloomie", projectDescription: "HTML, CSS, Javascript, PHP, MySQL, AJAX", projectImage: "https://github.com/user-attachments/assets/c8497de0-1298-4f2b-860c-02951ee4151a", projectLink: "https://www.redebloomie.com.br/" },
    { projectName: "Dashboard de vendas", projectDescription: "HTML, CSS, Javascript", projectImage: "https://github.com/winnie-s3/salon-booking/assets/74850021/c19553bf-60ef-46ac-a8af-7b3575d2521e", projectLink: "https://winnie-s3.github.io/dashboard-vendas/" },
    { projectName: "Salon Booking", projectDescription: "NodeJS, Express, MongoDB", projectImage: "https://github.com/winnie-s3/salon-booking/assets/74850021/3b071d1a-52a4-438d-a1c0-da8f5d0fc1ca", projectLink: "https://github.com/winnie-s3/salon-booking" },
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
              projectLink={project.projectLink}
            />
          ))}
        </div>
    )
}