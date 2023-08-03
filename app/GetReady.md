# Steps um react Native in VS Code zu beutzen:

- [Visual Studio Code](https://code.visualstudio.com) installieren.
- [Node.js](https://nodejs.org/de) installieren.
  > Node.js ist eine Laufzeitumgebung, die alles enthält, was man zur Ausführung eines in JavaScript geschriebenen Programms benötigt. <br>
  > Zusätzlich benötigt man es um NPM Befehle durchzuführen. <br>
  > Unter NPM (Node Package Manager) versteht man ein Paketmanager für node. js. Mit NPM lassen sich unter anderem Software-Pakete für die Entwicklung von Webprojekten verwalten und steuern.

Folgenden Befehl im Windows CMD oder in VS Code Terminal eingeben:

- Npm install –global expo-cli <br>
  > Dadurch ist expo Command Line interface global verfügbar und man braucht es um React Native Apps mit Expo zu starten oder zu erstellen. <br>
  > Expo ist eine Open-Source-Plattform für die Entwicklung universeller nativer Apps für Android, iOS und das Web mit JavaScript und React.

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
