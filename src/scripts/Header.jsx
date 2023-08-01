
export default function Header(){
    return(
       
        <div className="home-container-header about-container-header">
            <ul className="flex items-stretch gap-10 mx-4 my-5 "> 
                <li><a href="/">Home</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about">About</a></li>
                <div className="dropdown">
                    <button className="dropbtn">Work</button>
                    <div className="dropdown-content">
                    <a href='#'> Link1</a>
                    <a href='#'> Link2</a>
                    <a href='#'> Link3</a>
                </div>
                </div>
            </ul>
        </div>
    )
}