import {NavigationLink} from "components"
import { pageRoutes } from "constants/pageRoutes"
import "./Header.scss"


function Header () {
    return (
        <div className="header">
        <menu>
            <li><NavigationLink href={pageRoutes.HOME} title={"Go to Home Page"}>Home</NavigationLink></li>
        </menu>
        </div>
    )
}

export default Header