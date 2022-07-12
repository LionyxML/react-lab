import React from "react";
import { SafeAreaView, StatusBar, useColorScheme, View } from "react-native";
import WebView from "react-native-webview";

import { Colors } from "react-native/Libraries/NewAppScreen";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={backgroundStyle}>
        <WebView source={{ uri: "https://auth.protego.com.br/quantum" }} />
      </View>
    </SafeAreaView>
  );
};

export default App;
