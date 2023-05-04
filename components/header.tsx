import NedSvg from "@/public/Ned.svg";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div
      className="flex flex-row px-8 py-8 bg-white"
      // style={{ backgroundColor: "black" }}
    >
      <Image priority src={NedSvg} alt="ned-logo" />
      {/* <text style={{ fontSize: 24 }}>hey</text> */}
    </div>
  );
};

export default Header;
