
import Swapios from '../../assets/images/Swapios-Logo.png'
import CousuMouche from '../../assets/images/CousuMoucheLogo.png'
import LogoHoori from '../../assets/images/HooriLogo.webp'

export function ProjectSection() {

    return (
        <div className="pt-20 flex flex-col lg:h-screen w-full overflow-y-auto mb-20">
            <div className="flex flex-col flex-1/3 items-center lg: mb-10">
                <h1>Mes projets</h1>
            </div>
            <div className="w-full flex flex-col flex-1/3">
                <ProjectCard />
            </div>
            <div className="flex flex-col flex-1/3">
            </div>
        </div>
    )
}

export function ProjectCard() {
    return (
        <div className="text-lg w-full flex justify-center lg:h-full">
            <div className="flex flex-wrap justify-center lg:gap-20 gap-5 lg:h-full ">
                <div className='w-[90%] border rounded-lg border-CardBg bg-CardBg xs:w-96'>
                    <div className="p-2">
                        <img src={Swapios} className="w-1/3" alt='Logo Swapios' />
                    </div>
                    <div className='pl-3 font-bold'>
                        <p>
                            Swapios
                        </p>
                    </div>
                    <div className="flex p-3">
                        <p>Développement d'une application mobile (style Messenger) destinée au professionnel de santé.
                            Mise en place d'appel et de partage de fichier entre deux personnes afin de poser un diagnostique avec un confrère en cas de doute ou de l'avis d'un spécialiste.
                        </p>
                    </div>
                </div>
                <div className='w-[90%] border rounded-lg border-CardBg bg-CardBg xs:w-96'>
                    <div className="p-2 pt-6">
                        <img src={LogoHoori} className="w-1/3" alt='Logo Hoori'/>
                    </div>
                    <div className='pl-3 font-bold'>
                        <p>
                            Hoori
                        </p>
                    </div>
                    <div className=" flex p-3">
                        <p>
                            Création d'un site vitrine et d'un dashboard client. Ce projet destiné au agriculteur avait pour but d'automatiser la détection de Datura d'une parcelle agricole.
                            L'utilisateur avait la possibilité de programmer ses drones et de visualiser les zones infectées par le Datura.
                        </p>
                    </div>
                </div>
                <div className='w-[90%] border rounded-lg border-CardBg bg-CardBg xs:w-96'>
                    <div className="p-2">
                        <img src={CousuMouche} className="w-1/5" alt='Logo Cousu Mouche' />
                    </div>
                    <div className='pl-3 font-bold'>
                        <p>
                            Cousu Mouche
                        </p>
                    </div>
                    <div className=" flex p-3">
                        <p>
                            Site E-Commerce réalisé pour une artisane du sud de la France. Mise en place d'une authentifaction, d'un dashboard admin afin qu'elle puisse ajouter, modifier ou supprimer facilement des produits de sa boutique en ligne et d'un back-end en express Js.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}