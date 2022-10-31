import { Outlet } from "react-router-dom";
import NavBarComp from "../components/NavBarComp";


const Layout = () => {
    return ( 
        <div>
            {/* NavBar 공간 컴포넌트로 만들어서 불러옴 */}
            <NavBarComp/>

            {/* Outlet을 통해서 화면 구성 */}
            <div className="mt-3">
                <Outlet />
            </div>
        </div>
     );
}
 
export default Layout;