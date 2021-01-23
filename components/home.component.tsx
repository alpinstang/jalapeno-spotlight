import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import AutoTypingText from "react-native-auto-typing-text";

const image = require("../assets/images/splash.png");

export default function HomeComponent({ path }: { path: string }) {
  return (
    <View
      style={styles.container}
      lightColor="rgba(0,0,0,0.8)"
      darkColor="rgba(255,255,255,0.8)"
    >
      <ImageBackground source={image} style={styles.image}>
        <AutoTypingText
          text={`có căn nhà nằm nghe nắng mưa`}
          charMovingTime={80}
          delay={0}
          style={{
            position: "absolute",
            width: 300,
            fontSize: 30,
            color: "rgba(0,0,0,0.7)",
            backgroundColor: "rgba(0,0,0,0)",
            margin: 20,
            top: 240,
            left: 0,
          }}
          onComplete={() => {
            console.log("done");
          }}
        />
      </ImageBackground>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Helvetica",
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "#0c0c0c",
    textShadowOffset: { width: 3, height: 3 },

    //backgroundColor: "#000000a0",
  },
});
