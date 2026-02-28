import HeroSlider from "@/components/heroSlider"
import AboutPage from "@/components/about"
import OurServices from "@/components/serviceCards"
import GetInTouch from "@/components/get-in-touch"
import OurProjects from "@/components/OurProjects"

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Curved Shape */}
      <svg
        className="absolute top-0 left-0 w-[92%] h-[45vh] md:h-[60vh] z-10"
        viewBox="0 95 1510 740"
        preserveAspectRatio="none"
      >
        <path
          fill="black"
          d="
            M0,600
            C400,80 1050,520 1440,60
            L1440,0
            L0,0
            Z
          "
        />
      </svg>
      <HeroSlider />
      <div>
        <AboutPage />
      </div>
      <div>
        <OurServices />
      </div>
       <div>
        <OurProjects/>
      </div>
      <div>
        <GetInTouch/>
      </div>
    </main>
  )
}