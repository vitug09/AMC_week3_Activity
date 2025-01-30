import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('');
  const [age, onChangeAge] = React.useState('');
  const [address, onChangeAddress] = React.useState('');
  const [school, onChangeSchool] = React.useState('');
  const [course, onChangeCourse] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [contact, onChangeContact] = React.useState('');


  const [value, onChangeText] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="name"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          placeholder="age"
          keyboardType="numeric"
        />
          <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          placeholder="address"
          keyboardType="numeric"
        />
       <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
          placeholder="school"
          keyboardType="numeric"
        />
       <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
          placeholder="course"
          keyboardType="numeric"
        />
       <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="email"
          keyboardType="numeric"
        />
       <TextInput
          style={styles.input}
          onChangeText={onChangeContact}
          value={contact}
          placeholder="contact"
          keyboardType="numeric"        
        />
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          style={styles.textInput}
          onChangeText={text => onChangeText(text)}
          value={value}

          placeholder="About ME"
          keyboardType="numeric"
        

        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    margin: 12,
    padding: 2,

  }
});

export default TextInputExample;