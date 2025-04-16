
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import ContactCard from './ContactCard';

function ContactUs() {
  const contacts = [
    {
      name: "Dr. M.P.S. Bhatia",
      title: "Training & Placement",
      location: "Ground Floor, Training & Placement Building",
      university: "Netaji Subhas University of Technology",
      address: "Sector-3, Dwarka, New Delhi-110078, INDIA",
      phones: ["+91-9968604104", "+91-9818192294"],
      emails: ["placements@nsut.ac.in", "placements@nsitonline.in"],
      image: "https://test-mu-two.vercel.app/assets/MPSBhatia-CNgHXNeJ.jpeg"
    },
    {
      name: "Rajesh Rawat",
      title: "Training and Placement",
      location: "Ground Floor, Training & Placement Building",
      university: "Netaji Subhas University of Technology",
      address: "Sector-3 Dwarka, New Delhi-110078",
      phones: ["+91-9205475078", "+91-9810472670"],
      emails: ["placements@nsut.ac.in", "placements@nsitonline.in"],
      image: "https://test-mu-two.vercel.app/assets/sir2-Akb8zN0G.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Contact Us</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Those interested in the campus recruitment may also contact:
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Social Media</h2>
          <p className="text-center text-lg text-gray-600 mb-8">
            Follow us on social media to find out the latest information
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;