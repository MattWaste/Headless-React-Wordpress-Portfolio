
export default function Header(props){

    let cssClass = props.className;
    let id = props.id;
    let cssClass2 = props.cssClass2;

    return(
       
        <div id={`${id}`} className={`${cssClass} overflow-visible text-lg `}>
            <ul className="flex flex-wrap justify-end gap-10 py-5 sm:justify-center sm:gap-4 sm:px-4 px-36"> 
                <li><a className=" hover:text-violet-600"  href="/">Home</a></li>
                <li><a className=" hover:text-violet-600" href="/contact">Contact</a></li>
                <li><a className=" hover:text-violet-600" href="/about">About</a></li>
                <div className="dropdown">
                    <button className={`dropbtn ${cssClass2} hover:text-violet-600`}> <a href="/works">Works</a></button>
                    <div  className="dropdown-content">
                    <a className=" hover:text-[#38A12E]" href={'http://mawtestsite.local/works#mwdevices'}> MW Devices</a>
                    <a className=" hover:text-[#3752FF]" href={'http://mawtestsite.local/works#dev'}> Dev</a>
                    <a className=" hover:text-[#F69D1B]" href={'http://mawtestsite.local/works#design'}> Brand & Design</a>
                    <a className=" hover:text-[#E22C1D]" href={'http://mawtestsite.local/works#music'}> Music</a>
                    </div>
                </div>
            </ul>
        </div>
    )
}
