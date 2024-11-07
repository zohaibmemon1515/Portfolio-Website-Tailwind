import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#31065A] text-[#FFFFFF] py-8 px-4 flex flex-col items-center">
      <div className="flex justify-center gap-4 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl hover:text-[#F86F03] transition-colors" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl hover:text-[#F86F03] transition-colors" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl hover:text-[#F86F03] transition-colors" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-[#F86F03] transition-colors" />
        </a>
      </div>

      <p className="text-sm text-center">
        © 2024 Zohaib Memon. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
