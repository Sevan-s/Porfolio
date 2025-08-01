
export function SocialNetworkButton({ image: Icon, title, link }: { image: React.ElementType, title: string, link: string }) {

    const handleClick = () => {
        window.open(link, '_blank', 'noopener,noreferrer')
    }

    return (
        <button className="border-2 rounded-lg flex flex-row justify-center items-center pl-2 pr-2 border-buttonBorderColor hover:bg-buttonBorderColor" onClick={handleClick}>
            <Icon className="text-xl" />
            <p className="text-base p-2">{title}</p>
        </button>
    )
}