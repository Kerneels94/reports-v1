// Imports

/**
 * @description Header component
 */
const Header = () => {
    return <> 
        <div className="navbar bg-base-100 p-4 flex items-center justify-between shadow-lg">
            <div>
                <a className="text-xl" href="/">Reports</a>
            </div>
            <div className="links hidden lg:block">
                <a className="p-1" href="/reports/" >Reports</a>
                <a className="p-1" href="/pricing/">Pricing</a>
            </div>
            <div className="flex-none gap-2">
                {/* Mobile menu */}
                <div className="mobile-menu lg:hidden">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="p-1" href="/reports/" >Reports</a>
                            </li>
                            <li>
                                <a className="p-1" href="/pricing/">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Large screens */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar sm:hidden lg:block">
                        <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
     </>
}

export default Header