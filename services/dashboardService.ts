import * as Location from 'expo-location';

type Vehicle = {
  id: number;
  name: string;
  type: string;
  distance: string;
  image: string;
  available: boolean;
  rating: number;
};

type User = {
  firstName?: string;
  email: string;
};

// Replace this mock user with actual user state or API response
const mockUser: User = {
  firstName: '',
  email: 'driver@example.com'
};

/**
 * Gets the current location of the user using Expo Location API.
 * Returns a human-readable location name like city or area.
 */
export const getCurrentLocation = async (): Promise<string> => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      console.warn('Permission to access location was denied');
      return 'Unknown Location';
    }

    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    const geocode = await Location.reverseGeocodeAsync({ latitude, longitude });

    if (geocode.length > 0) {
      const place = geocode[0];
      return `${place.city || place.region || place.name || 'Unknown Area'}`;
    }

    return 'Unknown Area';
  } catch (error) {
    console.error('Error getting location:', error);
    return 'Location Error';
  }
};

/**
 * Returns mock nearby vehicles. Replace with actual API call later.
 */
export const getNearbyVehicles = async (): Promise<Vehicle[]> => {
  return [
    {
      id: 1,
      name: 'Toyota Hilux',
      type: 'Bakkie',
      distance: '2km',
      image: 'https://link-to-image/hilux.jpg',
      available: true,
      rating: 4.8
    },
    {
      id: 2,
      name: '2024 UD Kuzer',
      type: '3-ton truck',
      distance: '3km',
      image: 'https://link-to-image/kuzer.jpg',
      available: true,
      rating: 4.6
    },
    {
      id: 3,
      name: '2024 FAW 3.5 Ton',
      type: '5-ton truck',
      distance: '5km',
      image: 'https://link-to-image/faw.jpg',
      available: false,
      rating: 4.9
    }
  ];
};

/**
 * Gets the display name of the user.
 * Falls back to email if `firstName` is not present.
 */
export const getDisplayName = (): string => {
  return mockUser.firstName?.trim() || mockUser.email;
};

