export default function ButtonLink({link, linkText}) {

    return (
        <a className="font-tomorrow bg-[#3b2a2a] 
        text-[#e6e6e6] text-center
        py-2 max-w-lg
        hover:bg-[#2f4f4f]"
        href={link}>{linkText}</a>
    )

}