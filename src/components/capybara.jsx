import capybara from "/capybara.png";

const Capybara = () => {
  return (
    <div className=" flex gap-10 flex-col items-center justify-center align-middle row-span-9">
      <img className="animate-spin-slow w-40" src={capybara} alt="capybara" />
    </div>
  );
};

export default Capybara;
