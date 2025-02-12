import NavLinks from "./NavLinks";

export default function Nav() {

    return (

        <div className="flex flex-col items-center">
            <NavLinks link="/" linkText="home" />
            <NavLinks link="/portfolio" linkText="portfolio" />
            <NavLinks link="/about" linkText="about" />
            <NavLinks link="/contact" linkText="contact" />
        </div>
    )

}