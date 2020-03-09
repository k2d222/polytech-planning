# polytech-planning
ade polytech (mobile application)


android target version:27

important dirs to backup: www, res, .

## PREREQUISITES
 - cordova (nvm) `sudo npm install -g cordova`
 - android-studio `flatpak ?`
 - gradle (or installed as wrapper by android-studio, see below)
 - setup ANDROID_SDK_ROOT :
    - `gedit ~/.bashrc`
        - #ME
		  export JAVA_HOME="/usr/lib/jvm/jre-1.8.0-openjdk"
          export ANDROID_SDK_ROOT="$HOME/Android/Sdk"
          PATH="$ANDROID_HOME/tools:$ANDROID_SDK_ROOT/platform-tools:$PATH"
          #END-ME
 - install java JDK `java-1.8.0-openjdk-devel`

## INSTALL
 - cordova platform add android
 - cordova run

requires plugins network-information, whitelist, inappbrowser

## OPEN IN ANDROID-STUDIO
import project -> <project>/platforms/android
'yes' to gradle
`chmod a+x gradlew` if necessary when running `cordova run`

## versionning
in config.xml
