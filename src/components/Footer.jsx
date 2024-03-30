import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = {
    instagram: 'https://www.instagram.com/laratoneria1/',
    twitter: 'https://twitter.com/tu_cuenta',
    facebook: 'https://www.facebook.com/tu_cuenta',
    youtube: 'https://www.youtube.com/tu_cuenta',
  };

  return (
    <footer className="bg-pdark-grey text-white font-sans text-xs sm:text-sm py-1 px-4 border-b border-gray-400">
      <div className="max-w-lg mx-auto flex justify-center items-center">
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/Qf7cfXH/image.jpg"
            className="w-8 mr-2"
            alt="Logo La RatonerIA"
          />
          <p className="leading-relaxed text-[12px] sm:text-xs lg:text-sm max-w-xs sm:max-w-none mt-5">
            ¿Buscas calidad? nosotros buscamos precios ratones.
          </p>
        </div>
      </div>
      <div className="mt-2">
        <ul className="flex justify-center space-x-2"></ul>
      </div>
      <div className="mt-2 flex justify-center items-center">
        <p className="text-center mr-2 text-xs sm:text-sm lg:text-base p-2">
          &copy; 2024 La RatonerIA all rights reserved.
        </p>
        <div className="flex">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-1"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-1"
          >
            <FaTwitter size={16} />
          </a>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-1"
          >
            <FaFacebook size={16} />
          </a>
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-1"
          >
            <FaYoutube size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
