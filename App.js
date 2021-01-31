import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput  } from 'react-native';

export default function App() {

  const [text, setText] = useState('');
  const [data,setData] = useState([]);

  const buttonPressed = () => {
    setData([...data, {key: text}]);
    setText('');
  }

  const buttonClearPressed = () => {
    console.log("tyhjennetty");
    setData([]);
  }


  return (
    <View style={styles.container}>
      <View>
        <TextInput
        placeholder= "Add Item..."
        style={styles.input}
        onChangeText={(text) => setText(text)}
        value={text}
        ></TextInput>
        <View style={styles.operators}>
          <View style={styles.buttonContainer}>
            <Button
              title= "ADD"
              onPress={() => 
              buttonPressed(text)}>
            </Button>
            </View>
            <View style={styles.buttonContainer}>
            <Button
              title= "CLEAR"
              onPress= {buttonClearPressed}>
            </Button>
          </View>
        </View>
      </View>
      <Text style={styles.boldText}>Shopping list:</Text>
      <FlatList
        
        data={data}
        renderItem={({item}) => 
        <Text style={styles.listText}>{item.key}</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 60,//tällä saadaan alemmaksi otsikkoa
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontSize: 18,
    paddingTop: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
  listText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'normal',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
  },
  operators: {
  width: '80%',
  flexDirection: 'row',
  justifyContent: 'space-around',
},
  buttonContainer: {
    width: '45%'
  }
});
