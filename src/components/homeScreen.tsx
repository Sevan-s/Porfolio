import { useEffect, useRef, useState } from "react"
import Me from '../assets/images/sev.jpg'
import { SocialNetworkButton } from "./buttons/SocialNetworkButton"
import { FaLinkedin, FaGithub, FaEnvelope, FaDiscord, FaJs, FaReact, FaNodeJs, FaFigma, FaCss3Alt, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiMalt, SiPostgresql, SiStrapi, SiTailwindcss } from "react-icons/si";
import { ProjectSection } from "./card/projectcard";
import { ReactTyped } from "react-typed";
import { FaHtml5 } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGolang } from "react-icons/fa6";
import { FadeSection } from "../utils/hook/hook";

interface IsnInformation {
    image: any,
    title: string,
    link: string
}

export function HomeScreen() {
    const [showTitle, setShowTitle] = useState<boolean>(false)
    const [showTyped, setShowTyped] = useState(false);


    const socialNetworkInformation = [
        { image: FaLinkedin, title: "Linkedin", link: "https://www.linkedin.com/in/sevan-sarikaya/" },
        { image: FaGithub, title: "Github", link: "https://github.com/Sevan-s/" },
        { image: FaEnvelope, title: "sevan.sarikaya@gmail.com", link: "mailto:sevan.sarikaya@gmail.com" },
        { image: SiMalt, title: "Malt", link: "https://www.malt.fr/profile/sarikayasevan" },
        { image: FaDiscord, title: "Discord", link: "https://discord.com/users/yushinzo" },
    ]

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowTitle(true)
        }, 500);
        return () => clearTimeout(timeout);

    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowTyped(true);
        }, 800);
        return () => clearTimeout(timeout);

    }, [])

    return (
        <div className="w-full flex flex-col h-screen overflow-y-scroll snap-y scroll-smooth snap-always">
            <section className="h-screen snap-start flex items-center justify-center">
                <FadeSection>
                    <HomePageFirstSection
                        showTyped={showTyped}
                        showTitle={showTitle}
                        socialNetworkInformation={socialNetworkInformation}
                    />
                </FadeSection>
            </section>
            <section className="snap-start flex items-center bg-secondBgColor justify-center text-white text-4xl">
                <FadeSection>
                    <div className="h-screen w-screen">
                        <SkillsSection />
                    </div>
                </FadeSection>
            </section>
            <section className="snap-start flex items-center justify-center text-white text-4xl">
                <FadeSection>
                    <div className="h-screen">
                        <ProjectSection />
                    </div>
                </FadeSection>
            </section>
        </div>
    )
}

function HomePageFirstSection({ showTyped, showTitle, socialNetworkInformation }: { showTyped: boolean, showTitle: boolean, socialNetworkInformation: IsnInformation[] }) {

    return (
        <div className="flex flex-col justify-center w-full h-screen">
            <div className="flex flex-row flex-1/3"></div>
            <div className="flex flex-row flex-1/3">
                <div className={`flex flex-col justify-center text-3xl ${showTitle === false ? 'opacity-0' : 'opacity-100'} transition-all transition-discrete duration-700 w-1/2 flex-1/2 pl-40 pr-10`}>
                    <p>Bonjour, je m'appelle</p>
                    <p className="text-6xl">Sevan Sarikaya</p>
                    <p className="mt-2">et je suis <span className="text-animatedText ">
                        {showTyped && (
                            <ReactTyped
                                strings={["développeur Fullstack", "développeur web", "développeur mobile"]}
                                typeSpeed={30}
                                backSpeed={50}
                                loop
                            />
                        )}
                    </span>
                    </p>
                    <br />
                    <p className="text-sm pr-40">Suite à une reconversion professionnelle il y a de cela 5 ans à EPITECH, je développe des applications webs et mobiles en React et React Native</p>
                    <br />
                    <div className="flex flex-row gap-2">
                        {socialNetworkInformation.map((item, index) => (
                            <div
                                key={index}
                                className="fade-in-left"
                                style={{ animationDelay: `${1 + index * 0.25}s` }}
                            >
                                <SocialNetworkButton
                                    image={item.image}
                                    title={item.title}
                                    link={item.link}
                                />
                            </div>

                        ))}
                    </div>
                </div>
                <div className={`flex flex-col justify-center items-center ml-10 text-3xl w-1/2 flex-1/2`}>
                    <div className="w-1/2 overflow-hidden rounded-full aspect-square " >
                        <img
                            src={Me}
                            className="w-full h-full object-cover scale-300 origin-[10%_15%] opacity-0 animate-zoom-out"
                            style={{ animationDelay: '2s' }}
                            alt="Moi"
                        />
                    </div>
                </div>
            </div>
            <div className=" flex items-end flex-1/3 pb-5">
                <div className="flex flex-row justify-evenly w-screen">
                    <p className="text-2xl  flex flex-row items-center font-bold gap-2">3+
                        <span className="text-lg font-normal">
                            années d'expériences
                        </span>
                    </p>
                    <div className="w-px h-12 bg-gray-300 self-center" />
                    <p className="text-2xl w-60  flex flex-row items-center font-bold gap-2">10+
                        <span className="text-lg font-normal">
                            projets réalisés web et mobiles
                        </span>
                    </p>
                    <div className="w-px h-12 bg-gray-300 self-center" />
                    <p className="text-2xl  flex flex-row items-center font-bold gap-2">100%
                        <span className="text-lg font-normal">
                            de satisfaction
                        </span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export function SkillsSection() {
    return (
        <div className="pt-20 w-full h-full flex flex-col">
            <div className="mt-20 flex flex-1/6 justify-center ">
                <p>Skills</p>
            </div>
            <div className="mt-20 flex flex-1/3 flex-row justify-evenly items-center lg:text-lg xl:text-xl">
                <div className="flex flex-col gap-4">
                    <p className="font-bold mb-5">
                        Front-end
                    </p>
                    <div className="flex flex-row gap-1 items-center">
                        <FaReact />
                        <p>React</p>
                    </div>
                    
                    <div className="flex flex-row gap-1 items-center">
                        <FaJs />
                        <p>Javascript</p>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <BiLogoTypescript />
                        <p>Typescript</p>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <FaHtml5 />
                        <p>HTML</p>
                    </div>
                    
                </div>
                <div className="flex flex-col gap-4">
                    <p className=" font-bold mb-5">
                        Back-end
                    </p>
                    <div className="flex flex-row gap-2 items-center">
                        <FaNodeJs />
                        <p>Express</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <FaGolang />
                        <p>Go</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <SiPostgresql />
                        <p>PostgreSQL</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <SiStrapi />
                        <p>Strapi</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className=" font-bold mb-5">
                        Design
                    </p>
                    <div className="flex flex-row gap-2 items-center">
                        <FaFigma />
                        <p>Figma</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <SiTailwindcss />
                        <p>Tailwind</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <FaCss3Alt />
                        <p>CSS</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-bold mb-5">
                        Autres
                    </p>
                    <div className="flex flex-row gap-2 items-center">
                        <FaGitAlt />
                        <p>Git / Github</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <FaDocker />
                        <p>Docker</p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <p>CI/CD</p>
                    </div>
                </div>
            </div>
            <div className="mt-20 flex flex-1/3">
            </div>
        </div>
    )
}

