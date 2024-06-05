export function Header(){
    return(
        <div className="container md:flex hidden justify-between max-w-7xl mx-auto uppercase text-white">
            <p className="text-lg font-medium">Winnie Silva</p>
            <div className="flex items-center space-x-5">
                <ul className="flex space-x-5 list-none font-light">
                    <li className="hover:text-purple"><a href="#home">Home</a></li>
                    <li className="hover:text-purple"><a href="#about">About me</a></li>
                    <li className="hover:text-purple"><a href="#tech">Tech skills</a></li>
                    <li className="hover:text-purple"><a href="#projects">Projects</a></li>
                    <li className="hover:text-purple"><a href="#cv">CV</a></li>
                </ul>
            </div>
        </div>
    )
}