import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const NavBar = () => {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: '#f2f2f2', height: 60, alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
      <TouchableOpacity>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Plants</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
