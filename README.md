# Mobile Flashcards

The mobile flashcards app is a React Native application to quiz your knowledge for any given set of cards that are
input. It uses local device storage to hold the decks and respective cards.

<!--
![demo](assets/demo.gif | width=250)
-->
<img src="assets/demo.gif" width="40%">

## Setup & Execution

In a terminal opened to the location that this repository was cloned in, execute these commands to install the project
dependencies, and start the server hosting the React Native mobile app utilizing `react-native-scripts`.

```sh
yarn install
yarn start
```

### Android

Android Oreo (8.0) using API version 27 is the only version that was tested for this application, in order to use this
either an AVD image must be created and available using an emulator, or a device with Oreo must be available.

Once the bundle build is complete press either `q` to create a QR code to use with the Expo app, or `a` to launch the
app in a running Android emulator using the version information given.

### iOS

The iOS version of this app has not been tested due to a lack of developer tools.
