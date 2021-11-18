import { NavLink, Outlet } from "react-router-dom";
function Menu() {
  return (
    <div>
      <h1>Menu bar</h1>
      <nav>
        <NavLink to="/cat"> 고양이 사진 </NavLink> |{" "}
        <NavLink to="/Movies">영화 목록</NavLink>
      </nav>
    </div>
  );
}

export default Menu;
