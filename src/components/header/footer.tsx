import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
          <p className="text-sm">
            PakWheels is the leading automobile platform for buying, selling, and discussing vehicles in Pakistan.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Buy a Car</a></li>
            <li><a href="#" className="hover:text-white">Sell a Car</a></li>
            <li><a href="#" className="hover:text-white">Car Reviews</a></li>
            <li><a href="#" className="hover:text-white">Auto Parts</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul>
            <li>Email: support@pakwheels.com</li>
            <li>Phone: +92-300-1234567</li>
            <li>Address: Lahore, Pakistan</li>
          </ul>

          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">&copy; 2024 PakWheels. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
