import {NavigationLink} from "components"
import { pageRoutes } from "constants/pageRoutes"
import "./Header.scss"


function Header () {
    return (
        <div className="wrapper header">
        <menu>
            <li><NavigationLink href={pageRoutes.HOME} className={"header__menu__item"} title={"Go to Home Page"}>Home</NavigationLink></li>
            <li><NavigationLink href={pageRoutes.ADD} className={"header__menu__item"} title={"Go to Add Page"}>Add Page</NavigationLink></li>
        </menu>
        </div>
    )
}

export default Header