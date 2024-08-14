import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <div className="flex justify-between text-4xl  text-black">
      <Link href={"/"}>
        <FaFacebook />
      </Link>
      <Link href={"/"}>
        <FaTwitter />
      </Link>
      <Link href={"/"}>
        <FaInstagram />
      </Link>
      <Link href={"/"}>
        <FaLinkedin />
      </Link>
    </div>
  );
};
