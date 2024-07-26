const Header = ({children, theme, setTheme}) => {
    return (
        <header>
            <span className="logo">
                <span>{children}</span>
            </span>
            <span className="themeSelector">
               
                <span className={theme === "dark" ? "dark activeTheme" : "dark"} onClick={() => setTheme("dark")}></span>
                
            </span>
        </header>
    )
}

export default Header;
