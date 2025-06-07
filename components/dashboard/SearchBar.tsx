// components/dashboard/SearchBar.tsx

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MapPin } from 'lucide-react-native';
import { COLORS, SPACING, FONT_SIZES } from '../../constants/dashboard';

interface SearchBarProps {
  placeholder: string;
  onSearch?: (text: string) => void;
  onLocationPress: () => void;
  value?: string;
  editable?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onSearch,
  onLocationPress,
  value,
  editable = true
}) => {
  const [searchText, setSearchText] = useState(value || '');

  const handleTextChange = (text: string) => {
    setSearchText(text);
    onSearch?.(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={COLORS.secondary}
          value={searchText}
          onChangeText={handleTextChange}
          editable={editable}
        />
        <TouchableOpacity 
          style={styles.locationButton}
          onPress={onLocationPress}
          activeOpacity={0.8}
        >
          <MapPin size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    borderRadius: 12,
    overflow: 'hidden',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    fontSize: FONT_SIZES.md,
    color: COLORS.dark,
  },
  locationButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchBar;
