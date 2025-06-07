import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import BackButton from '../../components/BackButton';
import MainButton from '../../components/MainButton';

const RouteScreen = ({ navigation }: any) => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Select your route</Text>
      </View>

      <View style={styles.routeInputs}>
        <GooglePlacesAutocomplete
          placeholder="15 West Road South, Sandton"
          onPress={(data, details = null) => {
            setPickup(data.description);
          }}
          fetchDetails
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          styles={{
            textInput: styles.input,
            listView: styles.listView,
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Search for your drop-off point"
          onPress={(data, details = null) => {
            setDropoff(data.description);
          }}
          fetchDetails
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          styles={{
            textInput: styles.input,
            listView: styles.listView,
          }}
        />

        <TouchableOpacity style={styles.mapSelect}>
          <Text style={styles.mapText}>🗺️ Select on map</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.recentLabel}>Recent search</Text>
      <Text style={styles.noRecent}>No recent search….</Text>

      <MainButton
        title="Confirm route"
        onPress={() => {
          if (pickup && dropoff) {
            navigation.navigate('ConfirmTripScreen', { pickup, dropoff });
          } else {
            alert('Please select both pickup and drop-off locations');
          }
        }}
        style={styles.confirmBtn}
      />
    </KeyboardAvoidingView>
  );
};

export default RouteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 10,
  },
  routeInputs: {
    gap: 15,
  },
  input: {
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: '#FFF3E6',
    fontSize: 16,
  },
  listView: {
    zIndex: 10,
  },
  mapSelect: {
    marginTop: 10,
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },
  mapText: {
    fontSize: 16,
    color: '#333',
  },
  recentLabel: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: '500',
  },
  noRecent: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  confirmBtn: {
    marginTop: 'auto',
    marginBottom: 30,
    backgroundColor: '#FFD9A0',
  },
});

