# polytech-planning

* ade polytech (mobile application)
* android target version:27
* important dirs to backup: www, res, .
* the following instructions are made for Fedora. Setup on other linux distributions should be similar.

## prerequisites

 - cordova (nvm) `npm install -g cordova`
 - android-studio `flatpak ?`
 - gradle (or installed as wrapper by android-studio, see below)
 - setup ANDROID_SDK_ROOT : `gedit ~/.bashrc`
  ```
    export JAVA_HOME="/usr/lib/jvm/jre-1.8.0-openjdk"
    export ANDROID_SDK_ROOT="$HOME/Android/Sdk"
    PATH="$ANDROID_HOME/tools:$ANDROID_SDK_ROOT/platform-tools:$PATH"
  ```
 - install java JDK `java-1.8.0-openjdk-devel`

## install

 - `cordova platform add android`
 - `cordova build && cordova run` (`build` to compile webpack before deployment)
 - requires plugins network-information, whitelist, inappbrowser

## open in android-studio

* import project -> `<project>/platforms/android`
* 'yes' to gradle
* `chmod a+x gradlew` if necessary when running `cordova run`

## versionning

see config.xml
