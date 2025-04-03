import H2 from "../components/H2";
import Image from "../components/Image";
import TextBox from "../components/TextBox";
import TextBoxLarge from "../components/TextBoxLarge";

export default function AboutPage() {

    return (

        <>            
            
            <section className="text-center px-20 py-35
                bg-[#6b4f4f] text-[#e6e6e6]
                md:px-20 md:text-left">
                <H2 text="About me" />
                <TextBoxLarge text="I'm a new software developer and experienced digital theatre-maker." />            
            </section>          
      
            <section className="flex flex-col
                bg-[#e6e6e6] text-[#3b2a2a] 
                px-6 py-8 gap-2
                lg:flex lg:flex-row lg:px-20 lg:gap-4">

                <div className="flex flex-col
                    pb-4
                    ">         
                    <Image image="src/images/PyCon-UK-23-1.png" alt="Emily, a white woman in her thirties with pink hair, laughing as she speaks from a PyCon UK 2023 podium" />
                </div>

                <div className="flex flex-col
                gap-2">
                    <TextBox text="In 2023, I was invited to deliver a keynote at PyCon UK
                    about my career in the arts, focusing on new ideas around digital theatre. 
                    I've previously created hybrid online/onstage events, live virtual reality experiences,
                    and branching interactive visual novels. But PyCon helped me appreciate the breadth 
                    of opportunities in software development, and unlocked an unexpected love for coding." />
                    <TextBox text="Alongside my freelance creative work, I also have extensive experience 
                    in project coordination and digital communications. I'm particularly passionate 
                    about digital accessibility." />
                    <TextBox text="I trained with iO Academy, starting with their Coding Quick Start (2024), 
                    then completing a full-time Software Developer Essentials course in March 2025." />
                </div>
            </section>

        </>

    )

}