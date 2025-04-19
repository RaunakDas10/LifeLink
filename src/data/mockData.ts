// Mock data for blood availability
export const mockBloodData = [
  { type: 'A+', level: 'high', count: 142 },
  { type: 'A-', level: 'medium', count: 58 },
  { type: 'B+', level: 'medium', count: 83 },
  { type: 'B-', level: 'low', count: 27 },
  { type: 'AB+', level: 'low', count: 32 },
  { type: 'AB-', level: 'critical', count: 11 },
  { type: 'O+', level: 'high', count: 167 },
  { type: 'O-', level: 'medium', count: 52 },
];

// Mock data for blood banks
export const mockBloodBanks = [
  {
    id: '1',
    name: 'City Medical Center Blood Bank',
    location: 'Manhattan, NY',
    distance: 1.2,
    phone: '(212) 555-0123',
    hours: 'Mon-Fri: 8AM-8PM, Sat: 9AM-5PM',
    availableBloodTypes: ['A+', 'B+', 'O+', 'AB+', 'O-'],
  },
  {
    id: '2',
    name: 'Memorial Blood Donation Center',
    location: 'Brooklyn, NY',
    distance: 3.5,
    phone: '(718) 555-0456',
    hours: 'Mon-Sun: 7AM-7PM',
    availableBloodTypes: ['A+', 'A-', 'B+', 'O+', 'AB-'],
  },
  {
    id: '3',
    name: 'Regional Health Services Blood Bank',
    location: 'Queens, NY',
    distance: 5.7,
    phone: '(347) 555-0789',
    hours: 'Mon-Fri: 8AM-6PM, Sat: 8AM-2PM',
    availableBloodTypes: ['A+', 'B-', 'AB+', 'O+', 'O-'],
  },
  {
    id: '4',
    name: 'Community Blood Center',
    location: 'Bronx, NY',
    distance: 7.3,
    phone: '(718) 555-1234',
    hours: 'Mon-Sat: 9AM-5PM',
    availableBloodTypes: ['A+', 'A-', 'B+', 'O+'],
  },
  {
    id: '5',
    name: 'University Hospital Blood Bank',
    location: 'Manhattan, NY',
    distance: 2.8,
    phone: '(212) 555-5678',
    hours: 'Mon-Sun: 24 hours',
    availableBloodTypes: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  }
];