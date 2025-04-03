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
            <div className="flex gap-4
            md:justify-end">
                <a href="https://bsky.app/profile/emilyvhs.bsky.social"><i class="fa-brands fa-bluesky"></i></a>
                <a href="https://www.linkedin.com/in/emily-sherwood-3603b5277/"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/emilyvhs"><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    )

}