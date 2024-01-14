import { Link } from "react-router-dom";

// icons
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-8">
  <div className="container relative z-10 mx-auto px-4">
    <div className="-m-8 flex flex-wrap items-center justify-between">
      <div className="w-auto p-8">
        <Link to="/">
          <div className="inline-flex items-center">
            <span className="ml-4 text-lg font-bold">JaHir</span>
          </div>
        </Link>
      </div>
      <div className="w-auto p-8">
        <ul className="-m-5 flex flex-wrap items-center">
          <li className="p-5">
            <Link to='#' className="font-medium text-gray-600 hover:text-gray-700" >
              Privacy Policy
            </Link>
          </li>
          <li className="p-5">
            <Link to='#' className="font-medium text-gray-600 hover:text-gray-700" >
              Terms of Service
            </Link>
          </li>
          <li className="p-5">
            <Link to='' className="font-medium text-gray-600 hover:text-gray-700" >
              Return Policy
            </Link>
          </li>
          <li className="p-5">
            <Link to='/contact' className="font-medium text-gray-600 hover:text-gray-700">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-auto p-8">
        <div className="-m-1.5 flex flex-wrap">
          <div className="w-auto p-1.5">
            <Link to="https://www.facebook.com/">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                <FaFacebookF />
              </div>
            </Link>
          </div>
          <div className="w-auto p-1.5">
            <Link to="https://twitter.com/i/flow/login">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                <FaTwitter />
              </div>
            </Link>
          </div>
          <div className="w-auto p-1.5">
            <Link to="https://www.instagram.com/">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
              <FaInstagram />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Footer;