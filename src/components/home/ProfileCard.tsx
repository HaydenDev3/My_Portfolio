import { PrimaryButtonComponent } from "../utils/PrimaryButton";
export const logo: string = 'https://cdn.discordapp.com/avatars/622903645268344835/b6a22ba5428d163441930d781c32a76c.png';

export const ProfileCardComponent = () => {
    
    return (
        <>
            <div id="profile" className='flex flex-col items-center rounded-md text-center space-x-2 w-screen'>
                <div id="logo">
                    <img src={logo} alt="Logo" className="h-16 rounded-full" />
                </div>
                <div id="title" className='text-black font-semibold text-md mt-4'>Hayden, <span className="text-gray-200">Aka <code>Unbreakablenight</code></span></div>
                <div id="subtitle" className="text-sm text-gray-500">Developer & Founder @ Unbreakable's Network.</div>

                <div id="stats" className='flex justify-around items-center my-4 text-sm space-x-4 h-'>
                    <div className="stat-sub flex flex-col items-center font-semibold">
                        <div className="stat-number">10+</div>
                        <div className="stat-type font-bold">Projects</div>
                    </div>
                    <div className="stat-sub flex flex-col items-center font-semibold">
                        <div className="stat-number">15+</div>
                        <div className="stat-type font-bold">Moderated Servers</div>
                    </div>
                    <div className="stat-sub flex flex-col items-center font-semibold">
                        <div className="stat-number">5+</div>
                        <div className="stat-type font-bold">Owned Servers</div>
                    </div>
                </div>
                <div id="actions">
                    <PrimaryButtonComponent text="Discord Server" />
                    <PrimaryButtonComponent text="My Services" />
                </div>
            </div>
        </>
    )
}