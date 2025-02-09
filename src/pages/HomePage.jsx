import H2 from "../components/H2";
import PortfolioSection from "../components/PortfolioSection";
import TextBoxLarge from "../components/TextBoxLarge";

export default function HomePage() {

    return (

        <>

            <section className="text-center p-20
            bg-[#6b4f4f] text-[#e6e6e6]">
                <div>
                    <H2 text="Hi! I'm Emily." />
                    <TextBoxLarge text="I'm a software developer based in Derby, UK." />
                    <TextBoxLarge text="This is what I'm working on." />
                </div>
            </section>    
            
            <section className="flex flex-col
            bg-[#e6e6e6] text-[#3b2a2a] px-4 py-8 gap-8">
                <PortfolioSection />
            </section>

        </>
                    
    )
    
}