import DisplayMenu from "./components/DisplayMenu";
import { menu } from "./data";


function MenuSection() {
    return (
        <div className="menu-section">
            <h1 className="menu-section-title">Our Menu</h1>
            <DisplayMenu/>
        </div>
    )
  }
  
  export default MenuSection;