import H2 from "../components/H2";
import TextBoxLarge from "../components/TextBoxLarge";

export default function ContactPage() {
    return (
        <>

            <section className="text-center px-20 py-35
            bg-[#6b4f4f] text-[#e6e6e6]
            md:px-20 md:text-left">
                <H2 text="Contact me" />
                <TextBoxLarge text="The best way to get in touch with me is by email at emilyvhsherwood[at]gmail.com." />
            </section>
            
        </>
    )
}