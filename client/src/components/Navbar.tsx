import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center py-6 justify-between">
      {/* Logo and Brand Name */}
      <Link href="/">
        <div className="flex items-center cursor-pointer ">
          <Image alt="codercrush_logo" src="/logo.png" height={30} width={34} />
          <span className="font-bold text-primary  ml-2">codercrush</span>
        </div>
      </Link>

      {/* All Links */}
      <ul className="flex">
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Products</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Pricing</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Docs</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Products</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Company</a>
        </li>
      </ul>
      {/* Login and Register Container */}
      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Login</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a
            href="#"
            className="bg-primary py-2 transition-all px-4 rounded-sm text-white hover:bg-primary-dark"
          >
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
