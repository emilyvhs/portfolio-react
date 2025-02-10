import ButtonLink from "./ButtonLink";
import H3 from "./H3";
import Image from "./Image";
import TextBox from "./TextBox";

export default function PortfolioBox({title, image, description, alt, link}){

    return (
        <div className="
        flex flex-col
        p-4 gap-4
        shadow-[5px_5px_5px_5px_#a67c7c]
        hover:shadow-[7px_7px_7px_7px_#6B4F4F]     
        ">
            <H3 text={title} />
            <Image image={image} alt={alt} />
            <TextBox text={description} />
            <ButtonLink link={link} linkText="github link" />
        </div>
    )
}