import Image from "next/image";
import usuarioIcons from '@/Image/Aulas/usuario-do-grafico.png'
import pulso from '@/Image/Aulas/pulso.png'
import salada from '@/Image/Aulas/salada.png'
import crossfit from '@/Image/Aulas/crossfit.png'
import ginasio from '@/Image/Aulas/ginasio.png'
import treino from '@/Image/Aulas/treino.png'
export function SessaoAula() {
    return (
        <section className="bg-primary-gray">
            <div className="flex justify-center max-w-screen-xl mx-auto px-6 py-28">
                <div>
                    <div className="flex justify-center mx-auto">
                        <div className="text-center max-w-screen-md ">
                            <h1 className="text-white font-bold font-raleway text-4xl lg:text-5xl pb-4">TUDO É POSSÍVEL
                                NA
                                TECHFIT</h1>
                            <p className="text-gray-400 text-sm font-raleway">
                                Aqui, alcançamos nossos objetivos com determinação, superação e a certeza de que cada
                                desafio é uma oportunidade para nos tornarmos mais fortes.
                            </p>
                        </div>
                    </div>
                        <div className="block md:flex flex-wrap justify-center text-center gap-10 my-16">
                            <div className="mt-14 cursor-pointer">
                                <div className="flex justify-center">
                                    <Image className="w-16" src={usuarioIcons} alt="usuário"/>
                                </div>
                                <h1 className="text-white mt-5 font-bold font-raleway text-xl">TREINAMENTO PESSOAL</h1>
                                <p className="flex mt-2 justify-center mx-auto text-gray-400 text-sm font-raleway max-w-xs">
                                    Transforme sua jornada fitness com treinamentos personalizados
                                </p>
                            </div>
                            <div className="mt-14 cursor-pointer">
                                <div className="flex justify-center">
                                    <Image className="w-16" src={pulso} alt="treinamento cardíado"/>
                                </div>
                                <h1 className="text-white mt-5 font-bold font-raleway text-xl">TREINAMENTO CARDÍACO</h1>
                                <p className="flex mt-2 justify-center mx-auto text-gray-400 text-sm font-raleway max-w-xs">
                                    Maximize seu desempenho cardiovascular com nosso treinamento especializado
                                </p>
                            </div>
                            <div className="mt-14 cursor-pointer">
                                <div className="flex justify-center">
                                    <Image className="w-16" src={ginasio} alt="ginasio"/>
                                </div>
                                <h1 className="text-white mt-5 font-bold font-raleway text-xl">TREINAMENTO DE ESTILO LIVRE</h1>
                                <p className="flex mt-2 justify-center mx-auto text-gray-400 text-sm font-raleway max-w-xs">
                                    Liberte seu potencial com nossos treinamentos de estilo livre
                                </p>
                            </div>
                            <div className="mt-14 cursor-pointer">
                                <div className="flex justify-center">
                                    <Image className="w-16" src={salada} alt="nutrição"/>
                                </div>
                                <h1 className="text-white mt-5 font-bold font-raleway text-xl">NUTRIÇÃO ESPORTIVA</h1>
                                <p className="flex mt-2 justify-center mx-auto text-gray-400 text-sm font-raleway max-w-xs">
                                    Alcance seus objetivos atléticos com a nutrição esportiva personalizada
                                </p>
                            </div>
                            <div className="mt-14 cursor-pointer">
                                <div className="flex justify-center">
                                    <Image className="w-16" src={treino} alt="treino"/>
                                </div>
                                <h1 className="text-white mt-5 font-bold font-raleway text-xl">TREINO FUNCIONAL</h1>
                                <p className="flex mt-2 justify-center mx-auto text-gray-400 text-sm font-raleway max-w-xs">
                                    Desenvolva força e agilidade com nosso treino funcional
                                </p>
                            </div>
                            <div className="mt-14 cursor-pointer">
                                <div className="flex justify-center">
                                    <Image className="w-16" src={crossfit} alt="crossfit"/>
                                </div>
                                <h1 className="text-white mt-5 font-bold font-raleway text-xl">CROSSFIT</h1>
                                <p className="flex mt-2 justify-center mx-auto text-gray-400 text-sm font-raleway max-w-xs">
                                    Supere limites e alcance o próximo nível com o CrossFit
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}