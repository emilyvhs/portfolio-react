import { Link } from "react-router-dom";

export default function NavLinks({link, linkText}) {

    return (
        <div className="underline">
            <Link to={link}>{linkText}</Link>
        </div>
    )

}