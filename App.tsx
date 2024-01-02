import { HomeScreen, AccountScreen, PlaystationScreen, ReservationScreen } from './screens';
import { TabController, View } from 'react-native-ui-lib';
import IconIonicon from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tab: {
    display: 'flex',
    flexDirection: 'column',
  },
  tabLabel: {
    fontSize: 10,
  }
});

const tabs = [
    {
      label: 'Home',
      leadingAccessory: <IconIonicon name="home-outline" style={{ fontSize: 24, color: '#7F35B6' }} />,
      style: styles.tab,
      labelStyle: styles.tabLabel,
      selectedLabelStyle: styles.tabLabel,
    },
    {
      label: 'Reservation',
      leadingAccessory: <IconMaterialCommunity name="table-account" style={{ fontSize: 24, color: '#7F35B6' }} />,
      style: styles.tab,
      labelStyle: styles.tabLabel,
      selectedLabelStyle: styles.tabLabel
    },
    {
      label: 'PlayStation',
      leadingAccessory: <IconMaterialCommunity name="sony-playstation" style={{ fontSize: 24, color: '#7F35B6' }} />,
      style: styles.tab,
      labelStyle: styles.tabLabel,
      selectedLabelStyle: styles.tabLabel
    },
    {
      label: 'Account',
      leadingAccessory: <IconMaterialCommunity name="account-circle" style={{ fontSize: 24, color: '#7F35B6' }} />,
      style: styles.tab,
      labelStyle: styles.tabLabel,
      selectedLabelStyle: styles.tabLabel,
    },
  ];

export default function App() {
  return (
    <View style={{ width: '100%', display: 'flex' }}>
      <TabController items={tabs}>
        <View flex>
          <TabController.TabPage index={0}><HomeScreen /></TabController.TabPage>
          <TabController.TabPage index={1} lazy><ReservationScreen /></TabController.TabPage>
          <TabController.TabPage index={2} lazy><PlaystationScreen /></TabController.TabPage>
          <TabController.TabPage index={3} lazy><AccountScreen /></TabController.TabPage>
        </View>
        <TabController.TabBar />
      </TabController>
    </View>
  );
}
