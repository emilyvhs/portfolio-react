import H2 from "../components/H2";
import PortfolioSection from "../components/PortfolioSection";
import TextBoxLarge from "../components/TextBoxLarge";

export default function HomePage() {

    return (

        <>

            <section className="text-center px-20 py-35
            bg-[#6b4f4f] text-[#e6e6e6]
            md:px-20 md:text-left">
                <div>
                    <H2 text="Hi! I'm Emily." />
                    <TextBoxLarge text="I'm a software developer based in Derby, UK." />
                    <TextBoxLarge text="This is what I'm working on." />
                </div>
            </section>    
            
            <section className="flex flex-col
            bg-[#e6e6e6] text-[#3b2a2a] 
            px-6 py-8 gap-2
            md:px-20">
                <H2 text="Recent projects" />
                <div className="md:flex md:flex-wrap md:justify-evenly md:gap-6">
                    <PortfolioSection />
                </div>
            </section>

        </>
                    
    )
    
}