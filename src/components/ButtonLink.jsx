export default function ButtonLink({link, linkText}) {

    return (
        <a className="bg-[#6b4f4f] text-center
        hover:bg-[#2f4f4f]"
        href={link}>{linkText}</a>
    )

}