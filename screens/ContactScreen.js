
import { StyleSheet, Text, View } from 'react-native';

const ContactScreen = () => {
  return (
    <>
      <View style={styles.container}>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EBEAD8'
  },
  sidebarIcon: {
    height:50
  },
  sidebarText: {
    color: 'white',
    marginTop: 16,
    fontSize: 20,
  },
  sidebarTextWrapper: {
    backgroundColor: 'black',
    height: 50,
    width: 150,
  }
})

export default ContactScreen