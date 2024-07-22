'use client'
import Image from "next/image";
import Treino from '@/Image/ImagemDeTreino.jpg'

export function SessaoTopo() {
    return (
        <section id="sessaoTopo" className="bg-img-fundoTopo bg-center bg-cover bg-no-repeat">
            <div className="flex justify-center mx-auto">
                <div
                    className="md:flex w-full h-screen md:justify-center items-center py-28 gap-32 max-w-screen-xl mx-auto">
                    <div className="flex px-10 md:w-1/2 justify-center mx-auto">
                        <div className="text-white">
                            <div className="text-xl font-semibold">
                                Bem-vindo ao site da academia
                            </div>
                            <div className="relative">
                                <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mt-2">
                                    <span
                                        className="bg-gradient-to-r
                                        from-red-300 to-red-700 text-transparent bg-clip-text">TECHFIT GYM
                                    </span>
                                </h1>
                            </div>
                            <h3 className="hidden md:flex mt-5 font-semibold">
                            Aqui você pode conhecer mais sobre a academia, incluindo informações sobre valores, planos e ofertas.
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center items-center md:w-1/2 animate-pulse duration-1000">
                        <Image
                            className="rounded-lg w-96 my-10 border-2 border-red-400 hover:border-primary cursor-pointer duration-500"
                            src={Treino} alt="Treino"/>
                    </div>
                    <div className="md:hidden px-10">
                        <h3 className="text-white mt-5 font-semibold">
                        Aqui você pode conhecer mais sobre a academia, incluindo informações sobre valores, planos e ofertas.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}