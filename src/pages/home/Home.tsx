import { Hero } from "../../components/Hero"
import { About } from "../../components/About"
import { Navbar } from "../../components/Navbar"
import { Planets } from "../../components/Planets"
import { Sun } from "../../components/Sun"

export const Home = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Navbar/>
        <Hero/>
        <About/>
        <Planets/>
        <Sun/>
    </main>

  )
}
