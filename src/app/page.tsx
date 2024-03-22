import {Header} from "@/components/header";
import Image from "next/image";
import {SessaoTopo} from "@/components/sessaoTopo";

export default function Home() {
    return (
        <section>
            <Header/>
            <SessaoTopo/>
        </section>
    );
}
