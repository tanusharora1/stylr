import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text } from 'react-native';

// Placeholder screens - will be replaced with actual components
const HomeScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Home</Text>
  </View>
);

const ShopScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Shop</Text>
  </View>
);

const BrandsScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Brands</Text>
  </View>
);

const CartScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Cart</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Shop':
                iconName = focused ? 'grid' : 'grid-outline';
                break;
              case 'Brands':
                iconName = focused ? 'briefcase' : 'briefcase-outline';
                break;
              case 'Cart':
                iconName = focused ? 'cart' : 'cart-outline';
                break;
              default:
                iconName = 'help-circle';
            }

            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#E5F4FF', // iceblue
          tabBarInactiveTintColor: '#8FA3B3', // muted iceblue
          tabBarStyle: {
            backgroundColor: '#1A1D1F', // charcoal
            borderTopWidth: 0,
            paddingBottom: 5,
            height: 60,
          },
          headerStyle: {
            backgroundColor: '#1A1D1F', // charcoal
          },
          headerTintColor: '#E5F4FF', // iceblue
          headerTitleStyle: {
            fontWeight: '300',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Shop" component={ShopScreen} />
        <Tab.Screen name="Brands" component={BrandsScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#1A1D1F', // charcoal
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#E5F4FF', // iceblue
    fontSize: 20,
    fontWeight: '300',
  },
});