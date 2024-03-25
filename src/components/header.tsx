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
                    <h1 className="text-3xl font-extrabold">TECHFIT</h1>
                </div>
                <div className="flex items-center justify-between gap-10">
                    <div>
                        <ul className="hidden lg:flex gap-10 text-white">
                            <a href="#sessaoTopo"
                               className="text-white font-semibold hover:text-primary duration-500">
                                Home
                            </a>
                            <a href="#"
                               className="text-white font-semibold hover:text-primary duration-500">
                                Aulas
                            </a>
                            <a href="#"
                               className="text-white font-semibold hover:text-primary duration-500">
                                Vantagens
                            </a>
                            <a href="#"
                               className="text-white font-semibold hover:text-primary duration-500">
                                Planos
                            </a>
                            <a href="#"
                               className="text-white font-semibold hover:text-primary duration-500">
                                Download
                            </a>
                            <a href="#"
                               className="text-white font-semibold hover:text-primary duration-500">
                                Suporte
                            </a>
                        </ul>
                    </div>
                    <div>
                        <ButtonPrimary/>
                    </div>
                    <div className="flex lg:hidden">
                    <ButtonMenu funcao={() => setpuxarMenu(!puxarMenu)}/>
                    </div>
                </div>
            </div>
            {puxarMenu &&
                <div>
                    <div className="fixed inset-0 bg-black opacity-50 z-40" // opacidade do fundo da pág
                         onClick={() => setpuxarMenu(false)}>
                    </div>
                    <div className="block inset-0 z-50 bg-white w-64 h-screen absolute duration-300 lg:hidden">
                        <div className="items-center border-b-[1px] border-gray-200">
                            <button
                                className="w-12 h-12 flex items-center justify-center border-l-[1px] ml-auto"
                                onClick={() => setpuxarMenu(false)}>
                                <svg className="w-6 h-6"
                                     stroke="currentColor">
                                    <path d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="items-center py-3 px-5 border-b-[1px] border-gray-200">
                            <a href="#sessaoTopo" onClick={() => setpuxarMenu(false)}
                               className="text-black font-semibold hover:text-primary duration-500">
                                Home
                            </a>
                        </div>
                        <div className="items-center py-3 px-5 border-b-[1px] border-gray-200">
                            <a href="#" onClick={() => setpuxarMenu(false)}
                               className="text-black font-semibold hover:text-primary duration-500">
                                Aulas
                            </a>
                        </div>
                        <div className="items-center py-3 px-5 border-b-[1px] border-gray-200">
                            <a href="#" onClick={() => setpuxarMenu(false)}
                               className="text-black font-semibold hover:text-primary duration-500">
                                Vantagens
                            </a>
                        </div>
                        <div className="items-center py-3 px-5 border-b-[1px] border-gray-200">
                            <a href="#" onClick={() => setpuxarMenu(false)}
                               className="text-black font-semibold hover:text-primary duration-500">
                                Planos
                            </a>
                        </div>
                        <div className="items-center py-3 px-5 border-b-[1px] border-gray-200">
                            <a href="#" onClick={() => setpuxarMenu(false)}
                               className="text-black font-semibold hover:text-primary duration-500">
                                Download
                            </a>
                        </div>
                        <div className="items-center py-3 px-5 border-b-[1px] border-gray-200">
                            <a href="#" onClick={() => setpuxarMenu(false)}
                               className="text-black font-semibold hover:text-primary duration-500">
                                Suporte
                            </a>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}