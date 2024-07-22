import Techfit from '@/Image/TECHFIT-LOGO.png'
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-primary-gray py-8">
            <div className="max-w-xl mx-auto text-center text-white font-raleway">
                <div className="flex flex-col items-center">
                    <div className="w-64 mb-4 border-b ">
                        <Image src={Techfit} alt="Logo" />
                    </div>
                    <p>Academia TechFit Gym - © 2024 - Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
