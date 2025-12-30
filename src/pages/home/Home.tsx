import { About } from "../../components/about"
import { Hero } from "../../components/hero"
import { Planets } from "../../components/planets-section"
import { Sun } from "../../components/sun-section"

export const Home = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
        <Hero/>
        <About/>
        <Planets/>
        <Sun/>
    </main>
  )
}
