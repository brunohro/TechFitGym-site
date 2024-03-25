import Image from "next/image";
import Verificar from '@/Image/Planos/verificar.png'
import {ButtonPrimary} from "@/components/ui/ButtonPrimary";

export function SessaoPlanos() {
    return (
        <section className="bg-gray-300">
            <div className="flex justify-center mx-auto max-w-screen-xl py-28">
                <div>
                    <div className="flex justify-center mx-auto">
                        <div className="text-center max-w-screen-md ">
                            <h1 className="text-black font-bold font-raleway text-4xl lg:text-5xl pb-4">
                                CONHEÇA NOSSOS PLANOS
                            </h1>
                            <p className="text-gray-800 text-sm font-raleway">
                                Explore nossos planos abaixo e comece sua jornada para uma vida mais saudável hoje
                                mesmo!
                            </p>
                        </div>
                    </div>
                    <div className="block lg:flex gap-10 mx-10">
                        <div className="flex justify-center mx-auto my-10 bg-primary-gray max-w-lg lg:w-72 shadow-2xl rounded-3xl
                           border-2 border-transparent hover:border-primary duration-500">
                            <div className="mt-14 mb-10">
                                <div className="font-bold text-center font-raleway border-b-[1px] w-full">
                                    <h1 className="text-white text-2xl mb-4">
                                        BÁSICO
                                    </h1>
                                    <p className="text-primary text-xl mb-8">
                                        R$ 100,00/MÊS
                                    </p>
                                </div>
                                <div className="text-white font-raleway text-sm py-8">
                                    <ul>
                                        <li className="flex items-center mx-3 pb-5 gap-4">
                                            <div className="">
                                                <Image className="max-w-5" src={Verificar} alt="Verificar"/>
                                            </div>
                                            <p>Acesso ilimitado às instalações da academia durante horários
                                                específicos.</p>
                                        </li>
                                        <li className="flex items-center mx-3 pb-5 gap-4">
                                            <div>
                                                <Image className="max-w-5" src={Verificar} alt="Verificar"/>
                                            </div>
                                            <p>Utilização dos equipamentos de cardio e musculação.</p>
                                        </li>
                                        <li className="flex items-center mx-3 pb-5 gap-4">
                                            <div>
                                                <Image className="max-w-5" src={Verificar} alt="Verificar"/>
                                            </div>
                                            <p>Orientação básica de um instrutor de fitness.</p>
                                        </li>
                                        <li className="flex items-center mx-3 pb-5 gap-4">
                                            <div>
                                                <Image className="max-w-5" src={Verificar} alt="Verificar"/>
                                            </div>
                                            <p>3 dias de prática</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex justify-center">
                                    <a href="#"
                                       className="bg-primary px-14 py-3 rounded-full hover:bg-red-700 duration-500">
                                        <span className=" text-white">ASSINAR</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mx-auto my-10 bg-primary-gray max-w-lg lg:w-72 shadow-2xl rounded-3xl
                           border-2 border-transparent hover:border-primary duration-500">
                            <div className="mt-14 mb-10">
                                <div className="font-bold text-center font-raleway border-b-[1px] w-full">
                                    <h1 className="text-white text-2xl mb-4">
                                        INTERMEDIÁRIO
                                    </h1>
                                    <p className="text-primary text-xl mb-8">
                                        R$ 140,00/MÊS
                                    </p>
                                </div>
                                <div className="text-white font-raleway text-sm py-8">
                                    <ul>
                                        <li className="flex items-center mx-3 pb-5 gap-4">
                                            <div className="">
                                                <Image className="max-w-5" src={Verificar} alt="Verificar"/>
                                            </div>
                                            <p>Todos os benefícios do Plano Básico.</p>
                                        </li>
                                        <li className="flex items-center mx-3 pb-5 gap-4">
                                            <div>
                                                <Image className="max-w-5" src={Verificar} alt="Verificar"/>
                                            </div>
                                            <p>Acesso as aulas especializadas, como treinamento funcional, Crossfit e
                                                treinamento cardíaco </p>
                                        </li>
                                        <li className="flex items-center mx-3 pb-5 gap-4">
                                            <div>
                                                <Image className="max-w-5" src={Verificar} alt="Verificar"/>
                                            </div>
                                            <p>Sessões de treinamento personalizado com um instrutor qualificado
                                                para ajudar a estabelecer metas e desenvolver um programa de exercícios
                                                personalizado.</p>
                                        </li>
                                        <li className="flex items-center mx-3 pb-5 gap-4">
                                            <div>
                                                <Image className="max-w-5" src={Verificar} alt="Verificar"/>
                                            </div>
                                            <p>Descontos em serviços adicionais, como massagens e nutrição
                                                esportiva.</p>
                                        </li>
                                        <li className="flex items-center mx-3 pb-5 gap-4">
                                            <div>
                                                <Image className="max-w-5" src={Verificar} alt="Verificar"/>
                                            </div>
                                            <p>5 dias de prática</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex justify-center">
                                    <a href="#"
                                       className="bg-primary px-14 py-3 rounded-full hover:bg-red-700 duration-500">
                                        <span className=" text-white">ASSINAR</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mx-auto my-10 bg-primary-gray max-w-lg lg:w-72 shadow-2xl rounded-3xl
                           border-2 border-transparent hover:border-primary duration-500">
                            <div className="mt-14 mb-10">
                                <div className="font-bold text-center font-raleway border-b-[1px] w-full">
                                    <h1 className="text-white text-2xl mb-4">
                                        AVANÇADO
                                    </h1>
                                    <p className="text-primary text-xl mb-8">
                                        R$ 190,00/MÊS
                                    </p>
                                </div>
                                <div className="text-white font-raleway text-sm py-8">
                                    <ul>
                                        <li className="flex items-center mx-3 pb-5 gap-4">
                                            <div className="">
                                                <Image className="max-w-5" src={Verificar} alt="Verificar"/>
                                            </div>
                                            <p>Todos os benefícios do Plano Intermediário.</p>
                                        </li>
                                        <li className="flex items-center mx-3 pb-5 gap-4">
                                            <div>
                                                <Image className="max-w-5" src={Verificar} alt="Verificar"/>
                                            </div>
                                            <p>Sessões de treinamento personalizado mais frequentes para ajustar
                                                e adaptar o programa de exercícios conforme necessário.</p>
                                        </li>
                                        <li className="flex items-center mx-3 pb-5 gap-4">
                                            <div>
                                                <Image className="max-w-5" src={Verificar} alt="Verificar"/>
                                            </div>
                                            <p>Acesso exclusivo a áreas premium da academia,
                                                como salas de treinamento privadas.</p>
                                        </li>
                                        <li className="flex items-center mx-3 pb-5 gap-4">
                                            <div>
                                                <Image className="max-w-5" src={Verificar} alt="Verificar"/>
                                            </div>
                                            <p>Participação em workshops e seminários sobre saúde, fitness e
                                                nutrição.</p>
                                        </li>
                                        <li className="flex items-center mx-3 pb-5 gap-4">
                                            <div>
                                                <Image className="max-w-5" src={Verificar} alt="Verificar"/>
                                            </div>
                                            <p>Descontos especiais em programas de treinamento de longo prazo e eventos
                                                especiais da academia.</p>
                                        </li>
                                        <li className="flex items-center mx-3 pb-5 gap-4">
                                            <div>
                                                <Image className="max-w-5" src={Verificar} alt="Verificar"/>
                                            </div>
                                            <p>Todos os dias</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex justify-center">
                                    <a href="#"
                                       className="bg-primary px-14 py-3 rounded-full hover:bg-red-700 duration-500">
                                        <span className=" text-white">ASSINAR</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}