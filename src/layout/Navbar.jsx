import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex">
              {/* <img src={logo} alt="Logo" className="h-8 w-auto mr-4" /> */}
              <Link
                to="/home"
                className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
            </div>
            <div className="flex">
              
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;