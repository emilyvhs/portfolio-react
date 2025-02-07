export default function Image({image, alt}) {

    return (
        <img className="max-w-lg"
        src={image} alt={alt} />
    )
}