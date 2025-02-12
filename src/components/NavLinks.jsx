import { Link } from "react-router-dom";

export default function NavLinks({link, linkText}) {

    return (
        <div className="underline font-tomorrow text-lg
        hover:bg-[#6b4f4f]">
            <Link to={link}>{linkText}</Link>
        </div>
    )

}