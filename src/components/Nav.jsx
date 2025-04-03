import NavLinks from "./NavLinks";

export default function Nav() {

    return (

        <div className="flex flex-col items-center
        md:flex-row md:gap-4 md:justify-center md:flex-wrap">
            <NavLinks link="/" linkText="home" />            
            <NavLinks link="/about" linkText="about" />
            <NavLinks link="/contact" linkText="contact" />
        </div>
    )

}