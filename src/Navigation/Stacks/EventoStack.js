// React
import { StyleSheet } from 'react-native';
// kitten ui
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
// pantallas
import TinderScreen from '../../Screens/B2B/Tinder';
import ListaScreen from '../../Screens/B2B/Lista';
import MatchesScreen from '../../Screens/B2B/Matches';
import PerfilScreen from '../../Screens/B2B/Perfil';

// creo el tab navigator
const Tab = createBottomTabNavigator();

const Tinder = (props) => (<Icon {...props} name='home' />);
const Lista = (props) => (<Icon {...props} name='list' />);
const Matchs = (props) => (<Icon {...props} name='star' />);
const Peril = (props) => (<Icon {...props} name='user' />);

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}
        style={styles.navigation}
    >
        <BottomNavigationTab title='Home' icon={Tinder} />
        <BottomNavigationTab title='Lista de usuarios' icon={Lista} />
        <BottomNavigationTab title='Mis reuniones' icon={Matchs} />
        <BottomNavigationTab title='Perfil' icon={Peril} />
    </BottomNavigation>
);

export default function EventoStack() {

    return (
            <Tab.Navigator tabBar={props => <BottomTabBar {...props} />} initialRouteName='TinderScreen'
                screenOptions={{
                    headerShown: false
                }}>

                <Tab.Screen name="TinderScreen" component={TinderScreen} />
                <Tab.Screen name="ListaScreen" component={ListaScreen} />
                <Tab.Screen name="MatchesScreen" component={MatchesScreen} />
                <Tab.Screen name="PerfilScreen" component={PerfilScreen} />

            </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    navigation: {
        backgroundColor: '#FFFFFF',
        paddingBottom: 30,
    },
    icon: {
        height: 25,
        width:25
    }
})