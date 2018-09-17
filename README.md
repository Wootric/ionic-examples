# Wootric SDK + Ionic Framework examples

Here are the examples of running Wootric on Ionic applications, for non-Single Page Applications (SPA) and SPAs.

Before we begin, ensure that you have Cordova and Ionic installed and have iOS and Android platforms enabled. If you haven't, **begin from step 1**. If you already have done so, **move on to step 2**.

## 1. Install Cordova and Ionic, and configure iOS and Android platforms
Run the following commands to install Cordova and Ionic:
```
$ sudo npm install -g cordova
$ sudo npm install -g ionic
```

Next, run the following commands to configure iOS and Android platforms:
```
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

Or follow the Ionic installation guide [here](https://ionicframework.com/docs/v1/guide/installation.html) and **skip** *"Create the project"* and *"Test it out"*.


## 2. Download the Wootric SDK + Ionic Framework examples

Go to the directory you wish to create your folder (i.e. Desktop). Then, in your terminal, clone this repository using the following command:
```
$ git clone git@github.com:Wootric/ionic-examples.git
```
This will create a `ionic-examples` folder on your desired directory and download the repository files into the folder.
 

## 3. Run the examples

Before you run the examples, change to your desired directory by running the following commands:

### - `wootric-ionic` example
```
$ cd wootric-ionic
```

### - `wootric-ionic-spa` example
```
$ cd wootric-ionic-spa
```

### Now, you're ready to run the examples!

To test on a desktop browser, run the following command:
```
$ ionic serve
```

To test on an iOS simulator, run the following commands:
```
$ ionic cordova build ios
$ ionic cordova emulate ios
```

Or follow the Ionic testing guide [here](https://ionicframework.com/docs/v1/guide/testing.html).



To test the app on Android, follow the Ionic [testing guide](https://ionicframework.com/docs/v1/guide/testing.html) under *"Testing as a native app"*.


### ** The Wootric SDK + Ionic Framework example was built following the [Ionic Framework guide](https://ionicframework.com/docs/v1/guide/).
