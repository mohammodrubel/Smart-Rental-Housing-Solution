const Footer = () => {
    return (
      <footer className="bg-[#f70776] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Grid 1: Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                <li><a href="#" className="hover:text-gray-400">Careers</a></li>
                <li><a href="#" className="hover:text-gray-400">Press</a></li>
              </ul>
            </div>
            
            {/* Grid 2: Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-400">Safety</a></li>
                <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
              </ul>
            </div>
            
            {/* Grid 3: Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400">Terms</a></li>
                <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-400">Cookies</a></li>
              </ul>
            </div>
            
            {/* Grid 4: Company Info */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Company Info</h3>
              <p className="text-white">1234 Street Name, City, Country</p>
              <p className="text-white">Email: contact@company.com</p>
              <p className="text-white">Phone: +123 456 7890</p>
            </div>
          </div>
          <br />
          <hr />
          <br />
          {/* Footer Bottom */}
          <div className="mt-8 text-center text-white">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  