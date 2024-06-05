import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export function SocialMedias(){
    return(
        <ul className="flex flex-col items-center gap-6 md:gap-4 list-none text-purple text-3xl md:text-4xl ">
            <li><a href="https://github.com/winnie-s3"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/winnie-silva/"><FaLinkedin /></a></li>
            <li><a href="https://www.instagram.com/_winnie.s/"><FaInstagram /></a></li>
        </ul>
    )
}