import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between gap-20 flex-wrap max-lg:flex-col items-start">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer Logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect Size In Store. Get Rewards.
          </p>

          <div className="flex items-center mt-8 gap-5">
            {socialMedia.map((social) => (
              <div
                key={social.alt}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <img src={social.src} alt={social.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between gap-20 lg:gap-10 flex-wrap">
          {footerLinks.map((footerSection) => (
            <div key={footerSection.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {footerSection.title}
              </h4>
              <ul>
                {footerSection.links.map((link) => (
                  <li
                    className="mt-3 text-white-400 leading-normal font-montserrat text-base cursor-pointer hover:text-slate-gray"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p> Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
