import { Tabs } from "expo-router";
import { Ionicons } from '@react-native-vector-icons/ionicons';

export default function TabLayout() {
    return (
        <Tabs
        //customizing nav bar
            screenOptions={{
                headerShown: false,

                tabBarStyle: {
                    backgroundColor: '#000000C0',
                    borderTopWidth: 0,
                    shadowOpacity: 0,
                    elevation: 0,
                },

                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'lightgray',
            }}
        >
        <Tabs.Screen
            name="playlist"
            options={{
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="musical-note" color={color} size={size} />
            ),
            }}
        />
        <Tabs.Screen
            name="cover"
            options={{
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="play-circle" color={color} size={size} />
            ),
            }}
        />
        <Tabs.Screen
            name="albums"
            options={{
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="disc" color={color} size={size} />
            ),
            }}
        />
        <Tabs.Screen
            name="artists"
            options={{
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
            ),
            }}
        />
    </Tabs>
    );
};

