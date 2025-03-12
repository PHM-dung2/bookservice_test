import { Link } from "react-router-dom";

export default function Sidebar( props ){
    return(<>
        <div>
            <ul id="sideMenu" >
                <li> <Link to="/" > 홈 </Link> </li>
                <li> <Link to="/bookwrite" > 책 추천 등록 </Link> </li>
                <li> <Link to="/book" > 책 추천 조회 </Link> </li>
            </ul>
        </div>
    </>)
} // f end