import {Header} from "@/components/header";
import Image from "next/image";
import {SessaoTopo} from "@/components/sessaoTopo";
import {SessaoAula} from "@/components/sessaoAula";
import {SessaoPlanos} from "@/components/sessaoPlanos";

export default function Home() {
    return (
        <section>
            <Header/>
            <SessaoTopo/>
            <SessaoAula/>
            <SessaoPlanos/>
        </section>
    );
}
