# Steps um react Native in VS Code zu beutzen:

- Node.js installieren.
  > - **Optional:** Npm install –global expo-cli <br>
  >   Dadurch ist expo Command Line interface global verfügbar.

# Um development server zu starten:

- npm start
- **Alternative:** npx expo start

# Neues Projekt erstellen:

> - npx create-expo-app@latest --example with-router <br>
>   Erstellt ein Projekt mit dem Package: Expo Router, welches einen File based Navigation ermöglicht.

- npx expo install react-native-screens react-native-safe-area-context
- npx expo install react-dom react-native-web @expo/webpack-config

> - **Alternative:**
>   - npx create-expo app AppName
>   - npx expo install react-native-screens react-native-safe-area-context
>   - npx expo install react-dom react-native-web @expo/webpack-config <br>
>     Erstellt ein Projekt ohne Naviagtion Package. Man muss also ein geeignetes Navigation Package selber installieren.
