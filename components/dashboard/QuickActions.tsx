// components/dashboard/QuickActions.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LucideIcon } from 'lucide-react-native';
import { COLORS, SPACING, FONT_SIZES } from '../../constants/dashboard';

export interface QuickAction {
  id: string;
  icon: LucideIcon;
  label: string;
  disabled?: boolean;
}

interface QuickActionButtonProps {
  action: QuickAction;
  onPress: (action: QuickAction) => void;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ action, onPress }) => {
  const { icon: Icon, label, disabled = false } = action;

  return (
    <TouchableOpacity 
      style={[styles.actionButton, disabled && styles.disabledButton]}
      onPress={() => onPress(action)}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <Icon size={24} color={COLORS.primary} />
      </View>
      <Text style={[styles.actionLabel, disabled && styles.disabledLabel]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

interface QuickActionsProps {
  actions: QuickAction[];
  onActionPress: (action: QuickAction) => void;
  title?: string;
}

const QuickActions: React.FC<QuickActionsProps> = ({ 
  actions, 
  onActionPress, 
  title = "Quick actions" 
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.actionsContainer}>
        {actions.map((action) => (
          <QuickActionButton
            key={action.id}
            action={action}
            onPress={onActionPress}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: SPACING.md,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: SPACING.xs,
  },
  disabledButton: {
    opacity: 0.5,
  },
  iconContainer: {
    backgroundColor: COLORS.primaryLight,
    padding: SPACING.md,
    borderRadius: 16,
    marginBottom: SPACING.sm,
  },
  actionLabel: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.secondary,
    textAlign: 'center',
  },
  disabledLabel: {
    color: COLORS.secondary,
    opacity: 0.5,
  },
});

export default QuickActions;
