// components/dashboard/Header.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Bell, MapPin } from 'lucide-react-native';
import { COLORS, SPACING, FONT_SIZES } from '../../constants/dashboard';

interface HeaderProps {
  userName: string;
  currentLocation: string;
  onNotificationPress: () => void;
  notificationCount?: number;
}

const Header: React.FC<HeaderProps> = ({
  userName,
  currentLocation,
  onNotificationPress,
  notificationCount = 0
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.userInfo}>
          <Text style={styles.welcomeText}>Welcome {userName}</Text>
          <View style={styles.locationContainer}>
            <MapPin size={16} color={COLORS.primary} style={styles.locationIcon} />
            <Text style={styles.locationLabel}>Current Location: </Text>
            <Text style={styles.locationValue}>{currentLocation}</Text>
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.notificationButton}
          onPress={onNotificationPress}
          activeOpacity={0.7}
        >
          <Bell size={24} color={COLORS.secondary} />
          {notificationCount > 0 && (
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationCount}>
                {notificationCount > 9 ? '9+' : notificationCount}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flex: 1,
  },
  welcomeText: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: SPACING.sm,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: SPACING.sm,
  },
  locationLabel: {
    fontSize: FONT_SIZES.md,
    color: COLORS.secondary,
  },
  locationValue: {
    fontSize: FONT_SIZES.md,
    color: COLORS.primary,
    fontWeight: '500',
  },
  notificationButton: {
    backgroundColor: COLORS.light,
    padding: SPACING.sm,
    borderRadius: 20,
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: COLORS.error,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationCount: {
    color: COLORS.white,
    fontSize: FONT_SIZES.xs,
    fontWeight: 'bold',
  },
});

export default Header;
