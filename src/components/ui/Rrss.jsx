import { FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

const SocialLinks = ({ urlfb, urlig, urltw, urlyou, size }) => {
  return (
    <div className="flex w-1/2">
      <a
        href={urlig}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mx-1"
      >
        <FaInstagram size={size} />
      </a>
      <a
        href={urltw}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mx-1"
      >
        <FaTwitter size={size} />
      </a>
      <a
        href={urlfb}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mx-1"
      >
        <FaFacebook size={size} />
      </a>
      <a
        href={urlyou}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mx-1"
      >
        <FaYoutube size={size} />
      </a>
    </div>
  );
};

export default SocialLinks;
