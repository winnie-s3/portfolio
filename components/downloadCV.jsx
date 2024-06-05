import Image from "next/image";

import photo from "../public/assets/cv-image.png";
import { DownloadButton } from "./downloadButton";

export function DownloadCV(){
    return(
        <div className="flex flex-col justify-center items-center gap-6">
          <Image
            src={photo}
            alt="CV"
            width={70}
          />
          <DownloadButton />
        </div>

    )
}