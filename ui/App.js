import {NavigationContainer} from '@react-navigation/native'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image} from 'react-native';
import Index from './screens/Index'; 
import Details from './screens/Details';
import Create from './screens/Create';
import Edit from './screens/Edit';
import Delete from './screens/Delete';

function LogoTitle() {
  return (
    <Image 
      style={{ width: 110, height: 55}}
      source={require("./assets/ROI-icon.png")}
    />
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="Index" screenOptions={{
        headerStyle: {
          backgroundColor: '#595959',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Trebuchet MS',
          fontSize: '30px'
        },
        headerRight: (props) => <LogoTitle {...props} />
      }}>
          <Stack.Screen name="Index" component={Index} options={{ title: 'My Contacts' }} />
          <Stack.Screen name="Details" component={Details} options={{ title: 'CONTACT DETAILS' }} />
          <Stack.Screen name="Create" component={Create} options={{ title: 'ADD CONTACT' }}/>
          <Stack.Screen name="Edit" component={Edit} options={{ title: 'UPDATE CONTACT' }}/>
          <Stack.Screen name="Delete" component={Delete} options={{ title: 'DELETE CONTACT' }}/>
        </Stack.Navigator>
      </NavigationContainer>
  ); 
}