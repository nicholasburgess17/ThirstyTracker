import 'react-native-url-polyfill/auto';
import * as SecureStore from 'expo-secure-store';
const { createClient } = require('@supabase/supabase-js');

const ExpoSecureStoreAdapter = {
  getItem: function(key) {
    return SecureStore.getItemAsync(key);
  },
  setItem: function(key, value) {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: function(key) {
    SecureStore.deleteItemAsync(key);
  },
};

const supabaseUrl = YOUR_REACT_NATIVE_SUPABASE_URL;
const supabaseAnonKey = YOUR_REACT_NATIVE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

module.exports = supabase;
