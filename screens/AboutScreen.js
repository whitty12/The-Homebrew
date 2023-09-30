import { Card } from "@rneui/base";
import { CardImage } from "@rneui/base/dist/Card/Card.Image";
import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
import { StyleSheet, Text, View } from 'react-native';

const AboutScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Card style={styles.Card}>
          <CardTitle style={styles.text}>
            Placeholder Title about Coffee Goes Here
          </CardTitle>
          <CardImage>

          </CardImage>
        </Card>
        <Card styles={styles.Card}>
          <CardTitle style={styles.text}>
            Placeholder Title about Coffee Goes Here
          </CardTitle>
          <CardImage>

          </CardImage>
        </Card>
        <Card styles={styles.Card}>
          <CardTitle style={styles.text}>
            Placeholder about Shop page
          </CardTitle>
          <CardImage>

          </CardImage>
        </Card>
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

export default AboutScreen