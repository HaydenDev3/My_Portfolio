export const ProfileCardComponent = () => {
    return (
        <section className="profileCard text-white w-full max-w-sm cursor-pointer rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto mb-5" style={{ marginTop: '15vh' }}>
            <div className="flex justify-end px-4 pt-4">
                <div id="dropdown" className="z-10 hidden text-base list-none divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                    <ul className="py-1" aria-labelledby="dropdownButton">
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Edit</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Export Data</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Delete</a>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images-ext-1.discordapp.net/external/_I18lISvXNHLWJKJeE7o-PZpV2HeGpAfvsM6F2TZ0Vc/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/622903645268344835/b6a22ba5428d163441930d781c32a76c.webp" alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium dark:text-white">Unbreakablenight</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Developer</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <a href="https://www.discord.com/api/users/622903645268344835" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                    <a href="/services" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Services</a>
                </div>
            </div>
        </section>
    )
}