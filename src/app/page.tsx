import {Header} from "@/components/header";
import Image from "next/image";
import {SessaoTopo} from "@/components/sessaoTopo";
import {SessaoAula} from "@/components/sessaoAula";

export default function Home() {
    return (
        <section>
            <Header/>
            <SessaoTopo/>
            <SessaoAula/>
        </section>
    );
}
