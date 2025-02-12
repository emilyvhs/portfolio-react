import H1 from "./H1";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {

    return (
        <div className="flex flex-col items-center
        bg-[#3b292b] text-[#e6e6e6]
        px-4 py-8 gap-4
        md:grid md:grid-cols-3 md:px-20">
            <div className="flex items-center gap-4">
                <Logo />
                <H1 text='emily vhs' />
            </div>
            <div>
                <Nav />
            </div>
            <div>
                Socials
            </div>
        </div>
    )

}