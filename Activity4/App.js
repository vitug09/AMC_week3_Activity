import React from 'react';
import {StyleSheet, TextInput, Image, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('');
  const [age, onChangeAge] = React.useState('');
  const [address, onChangeAdd] = React.useState('');
  const [school, onChangeSchool] = React.useState('');
  const [course, onChangeCourse] = React.useState('');
   const [email, onChangeEmail] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
    const [value, onChangeText] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
      <View style={styles.container}> 
       <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPV-0jsgIsVjk0TnEe75g2DFOO6GhnLJRMQ&s',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="name"
          keyboardType="numeric"
        />
          </View>

         <View style={styles.container}> 
       <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3788/3788610.png',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          placeholder="age"
          keyboardType="numeric"
        />
        </View>
         <View style={styles.container}> 
       <Image
          source={{
            uri: 'https://www.freeiconspng.com/thumbs/address-icon/address-icon-15.png',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAdd}
          value={address}
          placeholder="address"
          keyboardType="numeric"
        />
        </View>
         <View style={styles.container}> 
       <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkthSWSsVDTkPIe6C9aXPJLO7knnUxjDlqg&s',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
          placeholder="School"
          keyboardType="numeric"
        />
        </View>
         <View style={styles.container}> 
       <Image
          source={{
            uri: 'https://www.pngplay.com/wp-content/uploads/6/Education-Icon-PNG-HD-Quality.png',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
          placeholder="Course"
          keyboardType="numeric"
        />
        </View>
         <View style={styles.container}> 
       <Image
          source={{
            uri: 'https://iconape.com/wp-content/uploads/1/11/gmail-02.png',
          }}
          style={{width: 50, height: 50}}
        />
          <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
          keyboardType="numeric"
        />
        </View>
         <View style={styles.container}> 
       <Image
          source={{
            uri: 'https://th.bing.com/th/id/R.5bcfacee5e112f63d3079b6239171e2d?rik=vXz%2b9lddkUYF6Q&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fMcL%2fx8R%2fMcLx8RXqi.png&ehk=7LrOc7oInSMF%2fUv421DLC3T7LIlzhWOGuOE82tjMg6o%3d&risl=&pid=ImgRaw&r=0',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Contact"
          keyboardType="numeric"
        />
        </View>
         <View style={styles.container}> 
       <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_-MQxdkdbc2CIRfmqEWX5E6x6ZTO6P41piQ&s',
          }}
          style={{width: 50, height: 50}}
        />
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={60}
           style={styles.textInput}
          onChangeText={text => onChangeText(text)}
          value={value}
          
          placeholder="About ME"
          keyboardType="numeric"
        />
        </View>



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
  },
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
  }
  
});


export default TextInputExample;
