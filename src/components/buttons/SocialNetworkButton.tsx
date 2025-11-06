
export function SocialNetworkButton({ image: Icon, title, link, download }: { image: React.ElementType, title: string, link: string, download: boolean }) {

    const handleClick = () => {
        if (download) {
            const a = document.createElement("a")
            a.href = link;
            a.download = "cv_sevan_sarikaya.pdf"
            document.body.appendChild(a)
            a.click();
            document.body.removeChild(a)
        } else {
            window.open(link, '_blank', 'noopener,noreferrer')
        }
    }

    return (
        <button className="border-2 rounded-lg flex flex-row justify-center items-center pl-2 pr-2 border-buttonBorderColor hover:bg-buttonBorderColor" onClick={handleClick}>
            <Icon className="text-xl" />
            <p className="text-base p-2">{title}</p>
        </button>
    )
}