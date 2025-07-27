import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/skills";
import Projects from "@/components/Projects";
import Contact from "@/components/contact";

export default function Home() {
    return (
        <>
            <Navbar/>
            <main className="w-screen mx-auto px-6">
                <section id="home"><Hero/></section>
                <section id="skills"><Skills/></section>
                <section id="projects"><Projects/></section>
                <section id="contact"><Contact/></section>
            </main>
        </>
    );
}
