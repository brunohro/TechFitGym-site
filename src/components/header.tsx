'use client'
import { ButtonPrimary } from "./ui/ButtonPrimary";
import {ButtonMenu} from "@/components/ui/ButtonMenu";
import {useState} from "react";
export function Header(){
    const [puxarMenu, setpuxarMenu] = useState(false);
    return(
        <section className="bg-transparent fixed top-0 left-0 right-0">
            <div className="flex px-10 py-6 mx-auto justify-between gap-5 max-w-screen-xl items-center">
                <div className="flex flex-col text-center text-primary cursor-pointer">
                    {/*<Image className="w-32" src={Logo} alt="Logo"/>*/}
                    <h1 className="text-3xl font-raleway">TECHFIT</h1>
                </div>
                <div className="flex items-center justify-between gap-10">
                    <div>
                        <ul className="hidden lg:flex gap-10 text-white">
                            <li>Recursos</li>
                            <li>Suporte</li>
                            <li>Vantagens</li>
                            <li>Planos</li>
                            <li>Download</li>
                        </ul>
                    </div>
                    <div>
                        <ButtonPrimary/>
                    </div>
                    <div>
                        <button className="flex items-center gap-3 text-white">
                            <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}