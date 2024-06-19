import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CardProject({projectName, projectDescription, projectImage, projectLink}){
    return(
        <div className="flex flex-col gap-3 justify-start text-left rounded-2xl">
          <div 
            className={`projectImage w-64 h-44 xl:w-72 xl:h-44 rounded-2xl ${!projectImage ? 'bg-background' : ''}`}
            style={{
              backgroundImage: projectImage ? `url(${projectImage})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className="flex flex-col">
            <p className="font-bold text-2xl">{projectName}</p>
            <p className="text-base"><span className="font-medium">Stacks:</span> {projectDescription}</p>
          </div>
          <Link href={projectLink} className="bg-purple font-semibold flex w-28 gap-3 text-center justify-center text-lg items-center text-white py-1 rounded cursor-pointer">Demo <ArrowRight /></Link>
        </div>
    )
}