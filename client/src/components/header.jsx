import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import Calendar from './calendar'

const Header = () => {
    //manages state of calendar (open or not)
  const [showCalendar, setShowCalendar] = useState(false);

  //toggle handled by button
  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar);
  };

  const getCurrentDay = () => {
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return today.toLocaleDateString(undefined, options);
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
        <Text style={{ fontSize: 18 }}>{getCurrentDay()}</Text>
        <Button title="Show Calendar" onPress={handleCalendarToggle} />
      </View>
      <Modal visible={showCalendar} animationType="slide">
        <Calendar onClose={handleCalendarToggle} />
      </Modal>
    </View>
  );
};

export default Header;
