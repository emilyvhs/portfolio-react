import H1 from "./H1";
import Nav from "./Nav";

export default function Header() {

    return (
        <div className="flex flex-col items-center
        bg-[#3b292b] text-[#e6e6e6]
        p-4 gap-4">
            <div>
                <H1 text='emily vhs' />
            </div>
            <div>
                <Nav />
            </div>
        </div>
    )

}