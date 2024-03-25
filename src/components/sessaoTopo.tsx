'use client'
import Image from "next/image";
import Treino from '@/Image/ImagemDeTreino.jpg'
export function SessaoTopo() {
    return (
        <section id="sessaoTopo" className="bg-img-fundoTopo bg-center bg-cover bg-no-repeat">
            <div className="flex justify-center mx-auto">
                <div className="md:flex w-full md:justify-center items-center py-28 gap-32 max-w-screen-xl mx-auto">
                    <div className="flex px-10 md:w-1/2 justify-center mx-auto">
                        <div className="text-white">
                            <h2 className="text-xl font-semibold">
                                I am Bruno
                            </h2>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-2">
                                Web Developer +
                                UX Designer
                            </h1>
                            <h3 className="hidden md:flex mt-5 font-light">
                                I break down complex user experinece problems to create integritiy focussed solutions
                                that
                                connect billions of people
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-center items-center md:w-1/2">
                        <Image
                            className="rounded-lg w-96 my-10 border-2 border-red-400 hover:border-primary cursor-pointer duration-500"
                            src={Treino} alt="Treino"/>
                    </div>
                    <div className="md:hidden px-10">
                        <h3 className="text-white mt-5 font-light">
                            I break down complex user experinece problems to create integritiy focussed solutions
                            that
                            connect billions of people
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}