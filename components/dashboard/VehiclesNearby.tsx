import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { COLORS, SPACING, FONT_SIZES } from '../../constants/dashboard';

export interface Vehicle {
  id: string | number;
  name: string;
  type: string;
  distance: string;
  image?: string;
  imageUri?: string;
  available?: boolean;
  rating?: number;
}

interface VehicleCardProps {
  vehicle: Vehicle;
  onPress: (vehicle: Vehicle) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onPress }) => {
  const renderVehicleImage = () => {
    if (vehicle.imageUri) {
      return (
        <Image 
          source={{ uri: vehicle.imageUri }} 
          style={styles.vehicleImage}
          resizeMode="cover"
        />
      );
    }

    return <Text style={styles.vehicleEmoji}>{vehicle.image || '🚗'}</Text>;
  };

  return (
    <TouchableOpacity 
      style={[
        styles.vehicleCard, 
        !vehicle.available && styles.unavailableCard
      ]}
      onPress={() => onPress(vehicle)}
      activeOpacity={0.7}
      disabled={!vehicle.available}
    >
      <View style={styles.vehicleImageContainer}>
        {renderVehicleImage()}
      </View>

      <View style={styles.vehicleInfo}>
        <Text style={styles.vehicleName}>{vehicle.name}</Text>
        <View style={styles.vehicleTypeContainer}>
          <Text style={styles.vehicleType}>{vehicle.type}</Text>
        </View>
        {vehicle.rating !== undefined && (
          <Text style={styles.vehicleRating}>⭐ {vehicle.rating.toFixed(1)}</Text>
        )}
      </View>

      <View style={styles.vehicleDistance}>
        <Text style={styles.distanceText}>{vehicle.distance}</Text>
        {!vehicle.available && (
          <Text style={styles.unavailableText}>Unavailable</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

interface VehiclesNearbyProps {
  vehicles: Vehicle[];
  onVehiclePress: (vehicle: Vehicle) => void;
  onSeeAllPress: () => void;
  title?: string;
  showSeeAll?: boolean;
}

const VehiclesNearby: React.FC<VehiclesNearbyProps> = ({
  vehicles,
  onVehiclePress,
  onSeeAllPress,
  title = "Vehicles nearby",
  showSeeAll = true
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {showSeeAll && (
          <TouchableOpacity onPress={onSeeAllPress} activeOpacity={0.7}>
            <Text style={styles.seeAllText}>see all</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.vehiclesList}>
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            onPress={onVehiclePress}
          />
        ))}
      </View>

      {vehicles.length === 0 && (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>No vehicles available nearby</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  seeAllText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.primary,
    fontWeight: '500',
  },
  vehiclesList: {
    gap: SPACING.md,
  },
  vehicleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SPACING.md,
    elevation: 5,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  unavailableCard: {
    opacity: 0.6,
  },
  vehicleImageContainer: {
    width: 64,
    height: 64,
    backgroundColor: COLORS.light,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  vehicleImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  vehicleEmoji: {
    fontSize: 32,
  },
  vehicleInfo: {
    flex: 1,
  },
  vehicleName: {
    fontSize: FONT_SIZES.md,
    fontWeight: '600',
    color: COLORS.dark,
    marginBottom: SPACING.xs,
  },
  vehicleTypeContainer: {
    alignSelf: 'flex-start',
  },
  vehicleType: {
    backgroundColor: COLORS.primaryLight,
    color: COLORS.primary,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: 16,
    fontSize: FONT_SIZES.sm,
    fontWeight: '500',
  },
  vehicleRating: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.secondary,
    marginTop: SPACING.xs,
  },
  vehicleDistance: {
    alignItems: 'flex-end',
  },
  distanceText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.secondary,
  },
  unavailableText: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.error,
    marginTop: SPACING.xs,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: SPACING.xl,
  },
  emptyStateText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.secondary,
    textAlign: 'center',
  },
});

export default VehiclesNearby;

