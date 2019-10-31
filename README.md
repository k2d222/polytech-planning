# polytech-planning
ade polytech (mobile application)


android target version:27

important dirs to backup: www, res, .

PREREQUISITES
 - cordova (nvm)
 - android-studio
 - gradle
 - setup ANDROID_HOME :
    - gedit ~/.bashrc
        - #ME
          export ANDROID_HOME="$HOME/Android/Sdk"
          PATH="$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$PATH"
          #END-ME
 - install java JDK

INSTALL :
 - cordova platform add android
 - cordova run

requires plugins network-information, whitelist, inappbrowser
