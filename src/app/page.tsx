import {Header} from "@/components/header";
import {SessaoTopo} from "@/components/sessaoTopo";
import {SessaoAula} from "@/components/sessaoAula";
import {SessaoPlanos} from "@/components/sessaoPlanos";
import {Footer} from "@/components/footer";

export default function Home() {
    return (
        <section>
            <Header/>
            <SessaoTopo/>
            <SessaoAula/>
            <SessaoPlanos/>
            <Footer/>
        </section>
    );
}
