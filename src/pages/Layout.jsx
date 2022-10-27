import { Outlet } from "react-router-dom";
import NavBarComp from "../components/NavBarComp";


const Layout = () => {
    return ( 
        <div>
            {/* NavBar 공간 컴포넌트로 만들어서 불러옴 */}
            <NavBarComp/>

            {/* Outlet을 통해서 화면 구성 */}
            <Outlet/>
        </div>
     );
}
 
export default Layout;