const { withAndroidManifest } = require('@expo/config-plugins');

module.exports = function withAdjustPan(config) {
  return withAndroidManifest(config, (config) => {
    const activity = config.modResults.manifest.application[0].activity?.[0];
    if (activity) {
      activity['$']['android:windowSoftInputMode'] = 'adjustPan';
    }
    return config;
  });
};
