import github from "/github-mark-white.svg";
import linkedin from "/linkedin-white.png";

const Footer = () => {
  return (
    <div className=" flex justify-end row-span-1 items-center px-12">
      <ul id="socials bar" className=" flex justify-center items-center gap-10">
        <li>
          <a href="https://github.com/Roni003" target="_blank" rel="noreferrer">
            <img
              className=" w-8 hover:brightness-75"
              src={github}
              alt="Github Logo"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/roni-kazmirci-erg%C3%BCn-028581254"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-8 hover:brightness-75"
              src={linkedin}
              alt="LinkedIn Logo"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
