"use client";
import { useRouter } from "next/navigation";
import logo from "../../public/logo.svg";
import Image from "next/image";
const Logo = ({customStyles} : {customStyles?: string}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return <Image src={logo} alt="logo" width={100} height={100} onClick={() => handleClick()} className={`cursor-pointer ${customStyles}`}/>;
};

export default Logo;
