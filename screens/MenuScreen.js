import { View } from "react-native"
import { StyleSheet } from "react-native"

const MenuScreen = () => {
  return (
    <View>
      
    </View>
  )
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

export default MenuScreen
