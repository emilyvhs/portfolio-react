import ButtonLink from "./ButtonLink";
import H3 from "./H3";
import Image from "./Image";
import TextBox from "./TextBox";

export default function PortfolioBox({title, image, description, alt, link}){

    return (
        <div>
            <H3 text={title} />
            <Image image={image} alt={alt} />
            <TextBox text={description} />
            <ButtonLink link={link} linkText="github link" />
        </div>
    )
}