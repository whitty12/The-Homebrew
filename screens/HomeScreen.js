import { Card } from "@rneui/base";
import { CardImage } from "@rneui/base/dist/Card/Card.Image";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native"
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.sidebar}>
          <TouchableOpacity style={styles.sidebarTextWrapper}>
            <Text style={styles.sidebarText}>
              About
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarTextWrapper}>
            <Text style={styles.sidebarText}>
              Menu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarTextWrapper}>
            <Text style={styles.sidebarText}>
              Seasonal
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarTextWrapper}>
            <Text style={styles.sidebarText}>
              Contact
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.pageHeader}>
            Homebrew Coffee
          </Text>
          <Card>
            <CardImage>

            </CardImage>
          </Card>
          <Card>
            <CardImage>

            </CardImage>
          </Card>
          <Card>
            <CardImage>
              
            </CardImage>
          </Card>
        </View>
      </SafeAreaView>
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
    fontSize: 25,
  },
  sidebarTextWrapper: {
    backgroundColor: 'black',
    height: 170,
    width: 150,
  },
  pageHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  }
})

export default HomeScreen
