import H1 from "./H1";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {

    return (
        <div className="flex flex-col items-center
        bg-[#3b292b] text-[#e6e6e6]
        p-4 gap-4">
            <div className="flex items-center gap-4">
                <Logo />
                <H1 text='emily vhs' />
            </div>
            <div>
                <Nav />
            </div>
        </div>
    )

}