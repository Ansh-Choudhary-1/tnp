import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function ContactCard({ name, title, location, university, address, phones, emails, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <img 
            src={image} 
            alt={name} 
            className="w-24 h-24 rounded-full object-cover mr-6"
          />
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
            <p className="text-lg text-blue-600">{title}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-gray-700">
            <p className="font-medium">{location}</p>
            <p>{university}</p>
          </div>

          <div className="flex items-start space-x-2 text-gray-600">
            <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
            <p>{address}</p>
          </div>

          <div className="space-y-2">
            {phones.map((phone, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-600">
                <FaPhone />
                <a href={`tel:${phone}`} className="hover:text-blue-600">
                  {phone}
                </a>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {emails.map((email, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-600">
                <FaEnvelope />
                <a href={`mailto:${email}`} className="hover:text-blue-600">
                  {email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;