import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const windowWidth = Dimensions.get("window").width;

const Begin: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
          source={require("assets/images/logo-no-bg.png")}
          style={styles.logo}
        />
          <Text style={styles.description}>
        Tiếng Anh giao tiếp tại Huế
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    padding: 24,
    marginTop: "auto",
    marginBottom: "auto",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'OpenSans_400Regular',
  },

  logo: {
    width: windowWidth,
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
});

export default Begin;
