import NavLinks from "./NavLinks";

export default function Nav() {

    return (

        <div className="flex flex-col items-center">
            <NavLinks link="/" linkText="home" />
            <NavLinks link="/about" linkText="about" />
        </div>
    )

}