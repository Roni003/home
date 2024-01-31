import capybara from "/capybara.png";
import Footer from "./components/footer";
/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */

function App() {
  return (
    <div id="app" className="h-svh grid grid-rows-10">
      <div className=" flex gap-10 flex-col items-center justify-center align-middle row-span-9">
        <h1 className="">Home</h1>
        <img className="animate-spin-slow w-40" src={capybara} alt="capybara" />
      </div>
      <Footer className=" row-span-1 " />
    </div>
  );
}

export default App;
