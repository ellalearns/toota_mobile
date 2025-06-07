import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar
} from 'react-native';
import {
  Truck,
  Clock,
  Navigation,
  Home,
  Map,
  Car,
  User
} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native'; // 🧠 Import navigation hook

// Components
import Header from '../../components/dashboard/Header';
import SearchBar from '../../components/dashboard/SearchBar';
import QuickActions, { QuickAction } from '../../components/dashboard/QuickActions';
import VehiclesNearby, { Vehicle } from '../../components/dashboard/VehiclesNearby';
import BottomNavigation, { NavigationTab } from '../../components/dashboard/BottomNavigation';

// Constants
import {
  COLORS,
  VEHICLE_TYPES,
  QUICK_ACTION_TYPES,
  TAB_IDS
} from '../../constants/dashboard';

const DashboardScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(TAB_IDS.HOME);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation(); // 🧠 Initialize navigation

  // Mock vehicle data
  const mockVehicles: Vehicle[] = [
    {
      id: 1,
      name: 'Toyota Hilux',
      type: VEHICLE_TYPES.BAKKIE,
      distance: '2km away',
      image: '🚗',
      available: true,
      rating: 4.8
    },
    {
      id: 2,
      name: '2024 UD Kuzer',
      type: VEHICLE_TYPES.TRUCK_3TON,
      distance: '3km away',
      image: '🚛',
      available: true,
      rating: 4.6
    },
    {
      id: 3,
      name: '2024 FAW 3.5 Ton',
      type: VEHICLE_TYPES.TRUCK_5TON,
      distance: '5km away',
      image: '🚚',
      available: false,
      rating: 4.9
    }
  ];

  const quickActions: QuickAction[] = [
    {
      id: QUICK_ACTION_TYPES.REQUEST,
      icon: Truck,
      label: 'Request trip'
    },
    {
      id: QUICK_ACTION_TYPES.SCHEDULE,
      icon: Clock,
      label: 'Schedule trip'
    },
    {
      id: QUICK_ACTION_TYPES.TRACK,
      icon: Navigation,
      label: 'Track trip'
    }
  ];

  const navigationTabs: NavigationTab[] = [
    { id: TAB_IDS.HOME, icon: Home, label: 'Home' },
    { id: TAB_IDS.MAP, icon: Map, label: 'Map' },
    { id: TAB_IDS.TRIPS, icon: Car, label: 'Trips', badge: 2 },
    { id: TAB_IDS.PROFILE, icon: User, label: 'Profile' }
  ];

  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {
    try {
      setLoading(true);
      setTimeout(() => {
        setVehicles(mockVehicles);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error loading vehicles:', error);
      setLoading(false);
    }
  };

  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  const handleSearch = (searchText: string) => {
    console.log('Search:', searchText);
  };

  const handleLocationPress = () => {
    console.log('Location button pressed');
  };

  const handleActionPress = (action: QuickAction) => {
    console.log('Action pressed:', action.id);

    switch (action.id) {
      case QUICK_ACTION_TYPES.REQUEST:
        navigation.navigate('RouteScreen'); // ✅ Navigate to RouteScreen
        break;
      case QUICK_ACTION_TYPES.SCHEDULE:
        console.log('Navigate to Schedule screen');
        break;
      case QUICK_ACTION_TYPES.TRACK:
        console.log('Navigate to Track screen');
        break;
      default:
        break;
    }
  };

  const handleVehiclePress = (vehicle: Vehicle) => {
    console.log('Vehicle selected:', vehicle.id);
  };

  const handleSeeAllPress = () => {
    console.log('See all vehicles pressed');
  };

  const handleTabPress = (tab: NavigationTab) => {
    setActiveTab(tab.id);
    console.log('Tab changed:', tab.id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView>
        <Header onNotificationPress={handleNotificationPress} />
        <SearchBar
          onSearch={handleSearch}
          onLocationPress={handleLocationPress}
        />
        <QuickActions
          actions={quickActions}
          onActionPress={handleActionPress}
        />
        <VehiclesNearby
          vehicles={vehicles}
          loading={loading}
          onVehiclePress={handleVehiclePress}
          onSeeAllPress={handleSeeAllPress}
        />
      </ScrollView>

      <BottomNavigation
        tabs={navigationTabs}
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  }
});

