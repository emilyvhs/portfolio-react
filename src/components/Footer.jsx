import Nav from "./Nav";
import TextBoxSmall from "./TextBoxSmall";

export default function Footer() {

    return (
        <div className="bg-[#3b292b] text-[#e6e6e6]
        p-4">
            <Nav />
            <div className="text-center mt-4">
                <TextBoxSmall text='&copy; Emily Sherwood 2025' />
                <TextBoxSmall text='Images: Ben Sherwood Photography; Mark Hawkins' />
            </div>
        </div>
    )
}