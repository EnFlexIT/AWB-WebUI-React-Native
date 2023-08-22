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

Folgenden Befehl im Terminal von VSCode eingeben um den development server zu starten:

- npm start
- **Alternative:** npx expo start
  > Nach der Eingabe des Befehls, die Anweisungen im Terminal befolgen. Es gibt Auswahlmöglichkeiten zwischen Web, Android und IOS.<br>
  > Je nach dem wo man seine Ergebnisse sehen will, hat man die Auswahl. Jedoch um Android und IOS nutzen zu können müssen dementsprechend Emulatoren runtergeladen werden.<br>
  > IOS Emulatoren sind nur für MacOS nutzbar.

Anleitung für die Installation von Emulatroen:

- [Android Emulator](https://developer.android.com/studio/run/emulator)
- [IOS Emulator](https://docs.expo.dev/workflow/ios-simulator/) Nur für MacOS!

- Während der development Server am laufen ist, kann man nun Änderungen am Code vornehmen. Diese dann abspeichern und dann den Browser oder Emulator Reloaden.
- mit strg+C beendet man den develpment Server

# Debugging in React Native:

- **Erstelle eine Debug-Konfiguration:** Gehe zum Debug View (klicke auf das Debug-Symbol in der Seitenleiste oder drücke Ctrl+Shift+D) und klicke auf "create a launch.json file".<br> Wähle dann "Chrome" als Umgebung (ander Browser sind auch möglich). Eine typische Konfiguration könnte so aussehen: <br>
  > { <br>
  > "version": "0.2.0",<br>
  > "configurations": [<br>
  > > {<br>
  > > "type": "chrome",<br>
  > > "request": "launch",<br>
  > > "name": "Launch Chrome against localhost",<br>
  > > "url": "http://localhost:3000",<br>
  > > "webRoot": "${workspaceFolder}"<br>
  > > }<br>
  > > ]<br>
  > }

Brower und Url müssen angepasst werden. Vergewissere dich, dass der url-Wert auf die Adresse zeigt, unter der deine Web-App läuft. <br>

- **Starte das Debugging:** Starte deine React Native App normalerweise (npm start). Dann gehe zurück zum Debug View, wähle die Konfiguration "Launch Chrome against localhost" und klicke auf den grünen Start-Button. <br>
  Jetzt solltest du in der Lage sein, Breakpoints in deinem React Native Code in VS Code zu setzen, und der Code wird im Chrome-Browser ausgeführt.<br>
  Du kannst die Debug-Werkzeuge von VS Code verwenden, um den Code zu inspizieren und zu steuern, einschließlich der Einstellung von Breakpoints, der Überprüfung des Call Stack und der Variablen, und der Anzeige von Ausgaben und Fehlern in der Debug-Konsole.

# Neues Projekt erstellen:

- npx create-expo-app@latest --example with-router <br>

  > Erstellt ein Projekt mit dem Package: Expo Router, welches einen File based Navigation ermöglicht. Dadurch muss man keine Zusätzliche Biblothek nutzen für die Navigation der App.<br> Hier gibt es die dazugehörige Dokumentation: [Expo Router](https://docs.expo.dev/routing/introduction/)

**Notwendige Pakete installieren:**

- npx expo install react-native-screens react-native-safe-area-context
- npx expo install react-dom react-native-web @expo/webpack-config

  > Diese braucht man um mit React Native for Web zu arbeiten.

- **Alternative:**
  - npx create-expo app AppName
  - npx expo install react-native-screens react-native-safe-area-context
  - npx expo install react-dom react-native-web @expo/webpack-config <br>
    > Erstellt ein Projekt ohne Naviagtion Package. Man muss also ein geeignetes Navigation Package selber installieren.

# Built Prozess:

Mit folgenden Befehl exportiert man einen static built in React Native:

- npx expo export
  > Hier werden direkt Web, Andoid und IOS Version erstellt und in einem Ordner (dieser wird immer als "dist" benannt) der sich im Projek Verzeichnis befindet abgelegt.

Um das Projekt nun im Agent.Workbench (AWB) zu integrieren, muss du den Inhalt des "dist" Ordners nun in einem Ordner im AWB einfügen (z.B. in diesm Projekt "awbAdmin").
Nun starte den AWB Server und gehe auf den Port auf der AWB läuft(z.B http://localhost:8080).

# React Native Desktop

Mit Expo allein kannst du nicht direkt für den Desktop kompilieren. Die Hauptziele von Expo sind Android, iOS und das Web.<br>
Wenn du eine Desktop-Anwendung mit React Native erstellen möchtest, gibt es andere Projekte und Wege, die du in Erwägung ziehen solltest:

1. ### **React Native Windows & macOS:**

   React Native Windows ist ein offizielles Projekt von Microsoft, das den Support für Windows 10 mittels UWP (Universal Windows Platform) ermöglicht.<br>
   Es gibt auch Unterstützung für React Native macOS, die auf einem Fork von React Native Windows basiert.

2. ### **Electron mit React:**
   Eine andere beliebte Methode, um Desktop-Anwendungen mit JavaScript und React zu erstellen, ist die Verwendung von Electron.<br>
   Mit Electron kannst du plattformübergreifende Desktop-Apps mit JavaScript, HTML und CSS erstellen. <br>
   Es ist das Framework, mit dem Anwendungen wie Slack, Microsoft Teams und Visual Studio Code erstellt werden.
