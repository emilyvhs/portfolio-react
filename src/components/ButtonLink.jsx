export default function ButtonLink({link, linkText}) {

    return (
        <a className="bg-[#3b2a2a] text-[#e6e6e6] text-center
        hover:bg-[#2f4f4f]"
        href={link}>{linkText}</a>
    )

}