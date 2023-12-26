import { View, Text, StyleSheet, Image } from 'react-native';
import { 
    createDrawerNavigator,
    DrawerItem,
    DrawerContentScrollView,
    DrawerContentComponentProps,
  } from '@react-navigation/drawer';

const iconHome = require('./assets/favicon.png')

const drawerData = [
    {
      name: 'Home',
      icon: iconHome,
    },
    {
      name: 'Calendar',
      icon: iconHome,
    },
    {
      name: 'Grids',
      icon: iconHome,
    },
    {
      name: 'Pages',
      icon: iconHome,
    },
    {
      name: 'Components',
      icon: iconHome,
    },
  ];
  

export function CustomDrawerContent(props: DrawerContentComponentProps) {
    return (
      <DrawerContentScrollView {...props} style={{padding: 0}}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={require('./assets/favicon.png')}
          />
          <View style={{ paddingLeft: 15 }}>
            <Text style={styles.userName}>John Doe</Text>
            <Text style={{ color: '#4BC1FD' }}>Johndoe@gmail.com</Text>
          </View>
        </View>
        <View style={styles.divider} />
        {drawerData.map((item, idx) => (
          <DrawerItem
            key={`drawer_item-${idx+1}`}
            label={() => (
              <View
                style={styles.menuLabelFlex}>
                <Image
                  style={{ width: 20, height: 20}}
                  source={item.icon}
                />
                <Text style={styles.menuTitle}>{item.name}</Text>
              </View>
            )}
            onPress={() => props.navigation.navigate(item.name)}
          />
        ))}
        <View style={styles.divider} />
        <DrawerItem
          label={() => (
            <View style={styles.menuLabelFlex}>
              <Image
                style={{ width: 20, height: 20}}
                source={iconHome}
              />
              <Text style={styles.menuTitle}>Blog</Text>
            </View>
          )}
          onPress={() => props.navigation.navigate('Blog')}
        />
        <View style={styles.divider} />
        <DrawerItem
          label={() => (
            <View style={styles.menuLabelFlex}>
              <Image
                style={{ width: 20, height: 20}}
                source={iconHome} 
              />
              <Text style={styles.menuTitle}>Settings</Text>
            </View>
          )}
          onPress={() => props.navigation.navigate('Calendar')}
        />
      </DrawerContentScrollView>
    );
  }

const styles = StyleSheet.create({
menuTitle: {
    marginLeft: 10,
    color: '#fff'
},
menuLabelFlex: {
    display: 'flex',
    flexDirection: 'row'
},
userName: {
    color: '#fff',
    fontSize: 18
},
divider: {
    borderBottomColor: 'white',
    opacity: 0.2,
    borderBottomWidth: 1,
    margin: 15,
},
avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
},
avatarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
    marginBottom: 10
},
});