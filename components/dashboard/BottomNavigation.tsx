// components/dashboard/BottomNavigation.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { LucideIcon } from 'lucide-react-native';
import { COLORS, SPACING, FONT_SIZES } from '../../constants/dashboard';

export interface NavigationTab {
  id: string;
  icon: LucideIcon;
  label: string;
  badge?: number;
}

interface TabButtonProps {
  tab: NavigationTab;
  isActive: boolean;
  onPress: (tab: NavigationTab) => void;
}

const TabButton: React.FC<TabButtonProps> = ({ tab, isActive, onPress }) => {
  const { icon: Icon, label, badge } = tab;

  return (
    <TouchableOpacity 
      style={styles.tabButton}
      onPress={() => onPress(tab)}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <Icon 
          size={24} 
          color={isActive ? COLORS.primary : COLORS.secondary} 
        />
        {badge && badge > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {badge > 9 ? '9+' : badge}
            </Text>
          </View>
        )}
      </View>
      <Text style={[
        styles.tabLabel, 
        { color: isActive ? COLORS.primary : COLORS.secondary }
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

interface BottomNavigationProps {
  tabs: NavigationTab[];
  activeTab: string;
  onTabPress: (tab: NavigationTab) => void;
  showHomeIndicator?: boolean;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  tabs,
  activeTab,
  onTabPress,
  showHomeIndicator = Platform.OS === 'ios'
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            tab={tab}
            isActive={activeTab === tab.id}
            onPress={onTabPress}
          />
        ))}
      </View>
      
      {showHomeIndicator && (
        <View style={styles.homeIndicator} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingBottom: Platform.OS === 'ios' ? 34 : SPACING.md, // Safe area for iOS
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.sm,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.sm,
    minWidth: 60,
  },
  iconContainer: {
    position: 'relative',
    marginBottom: SPACING.xs,
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: COLORS.error,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.xs,
    fontWeight: 'bold',
  },
  tabLabel: {
    fontSize: FONT_SIZES.xs,
    fontWeight: '500',
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: COLORS.dark,
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: SPACING.sm,
  },
});

export default BottomNavigation;
