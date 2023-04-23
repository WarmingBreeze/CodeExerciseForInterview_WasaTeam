import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Modal, Pressable, Button, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function HomeScreen() {
  const [data, setData] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title='Get API' onPress={()=>{
        fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
        .then((response) => response.json())
        .then((data) => {
          let temp = [];
          data.forEach((data) => temp.push(data));
          setData(temp);
          setShowModal(true);          
        });
        }}>
      </Button>
      <View>
        <Modal
          animationType='slide'
          visible={showModal}
        >
          {data.map((data)=>{
            return (
              <>
                <Text>Name: {data.name}</Text>
                <Text>City: {data.city}</Text>
              </>
            );
          })}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setShowModal(false)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </Modal>
      </View>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>頁面二</Text>
    </View>
  );
}

function MenuIcon(){
  const [isExpand, setIsExpand] = React.useState(false);
  
  function toggleMenu (){
    setIsExpand(!isExpand);
  }

  return (
    <View>
        <MaterialIcons name='list' size={50} color={'#cccccc'} onPress={toggleMenu}/>
    {isExpand && (
      <View
        style={{
          position: 'absolute',
          right: 0,
          top: 50,
          backgroundColor: '#fff',
          padding: 50,
          borderRadius: 5
        }}
      >
        <Text>Option 1</Text>
        <Text>Option 2</Text>
        <Text>Option 3</Text>
      </View>
    )}
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerRight: () => <MenuIcon/>
    }}>
      <Tab.Screen name="頁面一" component={HomeScreen} options={{
        tabBarLabel: 'Tab1',
        tabBarIcon:({color, size}) => (
          <MaterialIcons name='home' color={color} size={size} />
        )}} />
      <Tab.Screen name="頁面二" component={SettingsScreen} options={{
        tabBarLabel: 'Tab2',
        tabBarIcon:({color, size}) => (
          <MaterialIcons name='work' color={color} size={size} />
        )}}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});