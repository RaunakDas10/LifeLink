import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

interface BloodBank {
  id: string;
  name: string;
  location: string;
  distance: number;
  phone: string;
  hours: string;
  availableBloodTypes: string[];
}

interface BloodBanksListProps {
  bloodBanks: BloodBank[];
}

const BloodBanksList: React.FC<BloodBanksListProps> = ({ bloodBanks }) => {
  return (
    <div className="space-y-4">
      {bloodBanks.map((bank) => (
        <div key={bank.id} className="card p-6 hover:scale-[1.01] transition-transform duration-200">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold">{bank.name}</h3>
              
              <div className="flex items-center mt-2 text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">{bank.location} ({bank.distance.toFixed(1)} miles away)</span>
              </div>
              
              <div className="flex items-center mt-2 text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">{bank.phone}</span>
              </div>
              
              <div className="flex items-center mt-2 text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm">{bank.hours}</span>
              </div>
            </div>
            
            <div className="md:text-right">
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Available Blood Types:</p>
                  <div className="flex flex-wrap gap-2">
                    {bank.availableBloodTypes.map((type) => (
                      <span
                        key={type}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700"
                  >
                    View Details <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BloodBanksList;