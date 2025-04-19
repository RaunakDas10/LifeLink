import { useState, useEffect } from 'react';
import { Search, MapPin, AlertCircle } from 'lucide-react';
import BloodTypeCard from '../components/dashboard/BloodTypeCard';
import BloodBanksList from '../components/dashboard/BloodBanksList';
import EmergencyRequest from '../components/dashboard/EmergencyRequest';
import { mockBloodData, mockBloodBanks } from '../data/mockData';

const DashboardPage = () => {
  const [location, setLocation] = useState('');
  const [bloodType, setBloodType] = useState('All');
  const [bloodData, setBloodData] = useState(mockBloodData);
  const [filteredBloodBanks, setFilteredBloodBanks] = useState(mockBloodBanks);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  // Filter blood banks based on search criteria
  useEffect(() => {
    const filtered = mockBloodBanks.filter(bank => {
      const matchesLocation = location === '' || 
        bank.location.toLowerCase().includes(location.toLowerCase());
      
      const matchesBloodType = bloodType === 'All' || 
        bank.availableBloodTypes.includes(bloodType);
      
      return matchesLocation && matchesBloodType;
    });
    
    setFilteredBloodBanks(filtered);
  }, [location, bloodType]);

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-4">Blood Availability Dashboard</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Check real-time blood availability across different blood banks, find the nearest location, or make an emergency request.
          </p>
        </div>
      </div>
      
      {/* Search filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 -mt-8 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input pl-10"
            />
            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <div className="relative">
            <select
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              className="input appearance-none"
            >
              <option value="All">All Blood Types</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          
          <button 
            onClick={() => setShowEmergencyModal(true)}
            className="btn bg-red-600 text-white hover:bg-red-700 flex items-center justify-center"
          >
            <AlertCircle className="h-5 w-5 mr-2" />
            Emergency Request
          </button>
        </div>
      </div>
      
      {/* Blood Type Availability Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6">Blood Type Availability</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {bloodData.map((blood) => (
            <BloodTypeCard key={blood.type} blood={blood} />
          ))}
        </div>
      </section>
      
      {/* Blood Banks List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6">Nearby Blood Banks</h2>
        
        {filteredBloodBanks.length > 0 ? (
          <BloodBanksList bloodBanks={filteredBloodBanks} />
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <Search className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">No blood banks found</h3>
            <p className="mt-2 text-gray-500">
              Try adjusting your search filters or location to find blood banks.
            </p>
          </div>
        )}
      </section>
      
      {/* Emergency Request Modal */}
      {showEmergencyModal && (
        <EmergencyRequest onClose={() => setShowEmergencyModal(false)} />
      )}
    </div>
  );
};

export default DashboardPage;