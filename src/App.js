import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Products from "./components/Products";

function App() {
    return (
        <div className="h-screen overflow-hidden">
            <Header />
            <div className="grid grid-cols-5 gap-4 h-full">
                <SideBar />
                <div className="col-span-4 pt-4 pb-24 h-full overflow-scroll">
                    <Products />
                </div>
            </div>
        </div>
    );
}

export default App;
