import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Calendar = ({ onClose }) => {
    // The monthNames array contains the names of the months, which are used to display the current month in the calendar header.
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

//   The getCurrentMonth function retrieves the index of the current month.
  const getCurrentMonth = () => {
    const today = new Date();
    return today.getMonth();
  };

//   The getMonthDays function takes the current year and month as parameters and returns an array of numbers representing the days of the month.
  const getMonthDays = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, index) => index + 1);
  };
// The handleDayPress function is called when a day in the calendar is pressed. In this example, it simply logs a message to the console. 
// You can customize this function to perform the desired action when a day is selected.
  const handleDayPress = (day) => {
    console.log(`Day ${day} was pressed.`);
  };

//   The renderCalendar function generates the calendar UI by mapping through the days array and rendering a TouchableOpacity for each day.
  const renderCalendar = () => {
    const year = new Date().getFullYear();
    const month = getCurrentMonth();
    const days = getMonthDays(year, month);

    return (
      <View>
        <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: 10 }}>
          {monthNames[month]}
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {days.map((day) => (
            <TouchableOpacity
              key={day}
              onPress={() => handleDayPress(day)}
              style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: 'gray',
              }}
            >
              <Text>{day}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {renderCalendar()}
      <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
        <Text style={{ color: 'blue', fontSize: 18 }}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Calendar;
