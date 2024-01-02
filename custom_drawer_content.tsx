import { View, Text, StyleSheet, Image } from 'react-native';
import { 
    DrawerItem,
    DrawerContentScrollView,
    DrawerContentComponentProps,
  } from '@react-navigation/drawer';
import IconIonicon from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';


const drawerData = [
    {
      name: 'Home',
      icon: <IconIonicon name="home-outline" size={30} color="#900" style={{ fontSize: 24, color: '#7F35B6' }} />,
    },
    {
      name: 'Reservation',
      icon: <IconMaterialCommunity name="table-account" size={30} color="#900" style={{ fontSize: 24, color: '#7F35B6' }} />,
    },
    {
      name: 'PlayStation',
      icon: <IconMaterialCommunity name="sony-playstation" size={30} color="#900" style={{ fontSize: 24, color: '#7F35B6' }} />,
    },
    {
      name: 'Account',
      icon: <IconMaterialCommunity name="account-circle" size={30} color="#900" style={{ fontSize: 24, color: '#7F35B6' }} />,
    },
    {
      name: 'History',
      icon: <IconMaterialCommunity name="history-toggle-off" size={30} color="#900" style={{ fontSize: 24, color: '#7F35B6' }} />,
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
                {item.icon}
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
              <IconIonicon name="game-controller" size={30} color="#900" style={{ fontSize: 24, color: '#7F35B6' }} />
              <Text style={styles.menuTitle}>Blog</Text>
            </View>
          )}
          onPress={() => props.navigation.navigate('Blog')}
        />
        <View style={styles.divider} />
        <DrawerItem
          label={() => (
            <View style={styles.menuLabelFlex}>
              <IconAntDesign name="contacts" size={30} color="#900" style={{ fontSize: 24, color: '#7F35B6' }} />
              <Text style={styles.menuTitle}>Settings</Text>
            </View>
          )}
          onPress={() => props.navigation.navigate('Contacts')}
        />
      </DrawerContentScrollView>
    );
  }

const styles = StyleSheet.create({
menuTitle: {
    marginLeft: 10,
    color: 'black'
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