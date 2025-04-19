import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  bloodType?: string;
  userType: 'donor' | 'recipient' | 'bloodBank';
  dob?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, userData: Partial<User>) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load user from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call to authenticate
    // In a real app, this would make a fetch/axios request to your backend
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Simple validation (in real app this would be server-side)
        if (email === 'user@example.com' && password === 'password123') {
          const loggedInUser: User = {
            id: '1',
            email,
            firstName: 'John',
            lastName: 'Doe',
            bloodType: 'O+',
            userType: 'donor',
            dob: '1990-01-01',
          };
          
          setUser(loggedInUser);
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(loggedInUser));
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const signup = async (email: string, password: string, userData: Partial<User>) => {
    // Simulate API call to register
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const newUser: User = {
          id: Math.random().toString(36).substring(2, 9),
          email,
          firstName: userData.firstName || '',
          lastName: userData.lastName || '',
          bloodType: userData.bloodType,
          userType: userData.userType as 'donor' | 'recipient' | 'bloodBank',
          dob: userData.dob,
        };
        
        // In a real app, we would store the user in the backend
        // For this demo, we'll just resolve the promise
        resolve();
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    isAuthenticated,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};