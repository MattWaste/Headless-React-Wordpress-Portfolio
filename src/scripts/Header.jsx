
export default function Header(){
    return(
       
        <div className="home-container-header about-container-header works-container-header text-lg">
            <ul className="flex items-stretch gap-10 mx-8 my-5"> 
                <li><a className=" hover:text-violet-600"  href="/">Home</a></li>
                <li><a className=" hover:text-violet-600" href="/contact">Contact</a></li>
                <li><a className=" hover:text-violet-600" href="/about">About</a></li>
                <div className="dropdown">
                    <button className="dropbtn  hover:text-violet-600"> <a href="/works">Works {`\u25BC`}</a></button>
                    <div className="dropdown-content">
                    <a className="hover:text-violet-600" href='#'> MW Devices</a>
                    <a className="hover:text-violet-600" href='#'> Dev</a>
                    <a className="hover:text-violet-600" href='#'> Design</a>
                    <a className="hover:text-violet-600" href={'http://mawtestsite.local/works/#music'}> Music</a>
                </div>
                </div>
            </ul>
        </div>
    )
}
