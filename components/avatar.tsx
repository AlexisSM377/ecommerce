
/* eslint-disable @next/next/no-img-element */
const data = [
    {
        name: "Alexis Sovera Mireles",
        title: "Design Engineer",
        instagram: "alekzcrank.92",
        url: "https://unavatar.io/AlexisSM377",
        country: 'MX'
    },
    {
        name: "Mariana Itzel Romero Alvarez",
        title: "Design Engineer",
        instagram: "m.a.r.i.a.n.a_g",
        url: "https://unavatar.io/MarianaRM2",
        country: 'MX'
    },
    {
        name: "Jaqueline Damian Pedraza",
        title: "Design Engineer",
        instagram: "dmnjck__",
        url: "",
        country: 'MX'
    },
    {
        name: "Aldo Vara Lopez",
        title: "Design Engineer",
        instagram: "aldo_.vara",
        url: "https://unavatar.io/ALDOVARA",
        country: 'MX'
    },
    {
        name: "Jesus Enrique Buendia Terron",
        title: "Design Engineer",
        instagram: "starrosadxd",
        url: "https://unavatar.io/Jesusdxd",
        country: 'MX'
    }
]

interface Props {
    name: string
    title: string
    instagram?: string
    url: string
    country: string
    twitter?: string
}

function Speakers({ name, title, instagram, url, twitter, country }: Props) {
    return (
        <article className="relative flex flex-col items-center justify-center w-full transition-all dark:bg-[#121226]/50 border dark:border-slate-700 rounded-[20px] group overflow-hidden hover:scale-110">
            <div className="w-full p-[14px] rounded transition">
                <figure className="flex items-center justify-center">
                    <img src={url} alt={name} className="object-cover w-full aspect-square rounded-[10px]" />
                    <img src={url} alt={name} className="absolute opacity-70 transform-gpu blur-lg -z-10 block object-cover w-full aspect-square transition bg-white rounded-[10px]" />
                </figure>
                <header className="flex-1 items-center justify-between mt-4 gap-x-2">
                    <h3 className="text-[16px] font-bold text-left dark:text-white">
                        <a
                            href={
                                instagram
                                    ? `https://www.instagram.com/${instagram}`
                                    : `https://twitter.com/${twitter}`
                            }
                            target='_blank'
                            rel='external noopener nofollow'
                        >
                            {name}
                        </a>

                    </h3>
                    <a
                        className='text-[10px] dark:text-white/60 flex items-center font-semibold'
                        href={
                            twitter ? `https://twitter.com/${twitter}` : `https://www.instagram.com/${instagram}`
                        }
                        target='_blank'
                        rel='external noopener nofollow'
                    >
                        @{twitter ?? instagram}
                    </a>

                </header>
                <footer className="flex items-center justify-between gap-x-2">
                    <p className="text-xs text-left dark:text-white/60 font-semibold">{title}</p>
                    <span className="font-bold text-xs">{country}</span>
                </footer>
            </div>


        </article>
    )
}

export default function Avatar() {
    return (
        <section className="flex flex-col flex-wrap items-center justify-center max-w-5xl px-4 pt-48 mx-auto">

            <h2 className='text-5xl font-bold text-center dark:text-white'>
                Sobre nuestro <span className='text-blue-600'>Team</span>
            </h2>
            <p className='px-10 text-[18px] dark:text-white/80 text-center [text-wrap:balance] mt-4'>
                Profesionales de programación y la tecnología.
            </p>
            <div className="grid grid-cols-1 my-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8">
                {data.map((speaker) => (
                    <Speakers key={speaker.name} {...speaker} />
                ))}
            </div>

        </section>
    )
}