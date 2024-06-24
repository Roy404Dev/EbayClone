"use client";
import { useRouter } from "next/navigation";
import logo from "../../public/logo.svg";
import Image from "next/image";
const Logo = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return <Image src={logo} alt="logo" width={50} height={50} onClick={() => handleClick()} className="cursor-pointer"/>;
};

export default Logo;
