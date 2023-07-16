import { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";


function ToolBar() {
    const { logout } = useContext(LoginContext)


    return (

        <>
            <div>
                <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
                    <a className="navbar-brand" href="#"></a>
                    <div>
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <button onClick={logout} className="nav-link" >Logout</button>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >First</a>
                            </li>
                            <li className="nav-item">
                                <button onClick={logout} >Second</button>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>

        </>
    )
}


export default  ToolBar;