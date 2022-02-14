import React, {useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import Header from './components/Header/Header';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isPressed, setIsPressed] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode
              ? 'rgba(0,0,0,0.7)'
              : 'rgba(255,255,255,0.9)',
          }}>
          <Section title="Bem vindo!">
            Esse é um programa playground com{' '}
            <Text style={styles.highlight}>Exemplos!</Text>
          </Section>
          <Section title="Começando...">
            Vamos começar mostrando sections! Essa é uma section! Você pode ver
            que é um componente criado ali em cima, na verdade junstamos Views e
            Texts com Styles
          </Section>
          <Section title="Using a TextInput">
            <TextInput
              style={{
                height: 30,
                width: '100%',
                borderColor: 'gray',
                borderWidth: 2,
              }}
              defaultValue="Input here!"
            />
          </Section>
          <Section title="Using Image">
            <Image
              source={{uri: 'https://picsum.photos/200/'}}
              style={{
                width: 200,
                height: 200,
              }}
            />
          </Section>
          <Section title="State && Button">
            <View>
              <Text>O botão está: {isPressed ? 'solto' : 'pressionado'}</Text>
              <Button onPress={() => setIsPressed(true)} title="Me aperta" />
            </View>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    paddingLeft: 12,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
