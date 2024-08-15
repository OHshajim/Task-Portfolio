import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="flex justify-between text-4xl  text-black gap-5">
      <FaFacebook />

      <FaTwitter />

      <FaInstagram />

      <FaLinkedin />
    </div>
  );
};

export default SocialMedia;
