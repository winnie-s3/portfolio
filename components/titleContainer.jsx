"use client"

import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";
import styled from 'styled-components'

import photo from "../public/assets/winnie-silva.png";

export function TitleContainer(){
    return(
        <div className="bg-secondary lg:w-9/12 rounded-2xl">
          <div className="gap-4 flex justify-center items-center py-6 px-5 md:px-8 text-center sm:text-left">
            <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center sm:items-start">
              <h1 className="text-4xl font-bold flex flex-col sm:items-start">FULL STACK<span>&lt;/DEVELOPER&gt;</span></h1>
              <p className="text-sm md:text-base xl:text-lg">Eu desenvolvo softwares e aplicações web, transformando suas ideias em soluções digitais.</p>
              <a href="https://api.whatsapp.com/send?phone=5511943864922&text=Ol%C3%A1,%20vi%20seu%20portif%C3%B3lio%20e%20fiquei%20interessado(a)%20no%20seu%20perfil!" className="w-full text-sm flex justify-center gap-3 items-center bg-purple text-white py-1.5 rounded-xl md:text-lg font-semibold text-center md:w-44">Contato <FaArrowCircleRight className="text-xl" /></a>
            </div>
            <Image src={photo} alt="Winnie Silva" className="hidden sm:block sm:w-44 md:w-52 lg:w-56"/>
          </div>
        </div>
    )
}