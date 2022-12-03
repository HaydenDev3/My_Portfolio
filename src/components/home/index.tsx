import { Fade } from "@mui/material";
import { ProfileCardComponent } from "./ProfileCard";
import { WavesBottomComponent } from "./WavesBottom";
import { WavesTopComponent } from "./WavesTop";

export const HomeComponent = ({ }): Promise<any> | any => {
    return (
        <>
            <main style={{ marginTop: "25vh" }}>
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                  <Fade in={true}>
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Hola, amigos.</h1>
                        <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">I'm <code>Unbreakablenight</code>, I can code in a variety of languages like JavaScript, TypeScript, Python, HTML, CSS, and more!</p>
                        {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Get started
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a> */}
                        
                        <a href="https://discord.gg/6pv88sK3" className="text-white inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 transition ease-in-out duration-300">
                            Join Discord
                        </a> 
                        <a href="/services" className="ml-2 text-white inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 transition ease-in-out duration-300">
                            Services
                        </a> 
                      </div>
                    </Fade>        
                </div>
            </main>
            {/* <WavesTopComponent></WavesTopComponent> */}
            <WavesBottomComponent />
            <Fade in={true}>
                <div id="profile">
                    <ProfileCardComponent></ProfileCardComponent>
                </div>
            </Fade>
        </>
    );
};