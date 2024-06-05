import { FaHtml5, FaReact } from "react-icons/fa";
import { AlertDialogButton } from "./alertDialog";

export function CardTech({ icon: Icon, langName, langLevel, skills }) {
    return(
        <div className="flex flex-col items-center gap-3 bg-secondary p-3 rounded-xl w-72 sm:w-64 md:w-60">
          <span className="flex items-center gap-3 w-full">
            <Icon className="text-5xl" />
            <div className="text-left">
              <p className="font-bold text-xl m-0">{langName}</p>
              <p className="text-sm">{langLevel}</p>
            </div>
          </span>
          <AlertDialogButton dialogName={langName} skills={skills} />
        </div>
    )
}