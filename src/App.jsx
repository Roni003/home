import capybara from "/capybara.png";
/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */

function App() {
  return (
    <>
      <div className=" flex gap-8 flex-col items-center justify-center min-h-screen">
        <h1 className="">Home</h1>
        <img className="animate-spin-slow w-40" src={capybara} alt="capybara" />
      </div>
    </>
  );
}

export default App;
