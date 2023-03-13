import "./App.css";
import Menu from "./Rounter/Menu";
import MenuFooter from "./Rounter/MenuFooter";
import MenuLeft from "./Rounter/MenuLeft";
import MenuRight from "./Rounter/MenuRight";
import routes from "./Rounter/Rounter";
function App() {
  return (
    <div>
      <div className="menu-container">
        <Menu />
        <div className="sidebar">
          <div className="sidebar-left">
            <MenuLeft />
          </div>

          {routes}

          <div className="sidebar-right">
            <MenuRight />
          </div>
        </div>
        <div>
          <MenuFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
