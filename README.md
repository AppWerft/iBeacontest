iBeacons & Titanium 
===================
![](http://t3n.de/news/wp-content/uploads/2014/06/ibeacon-verschiedene-bauformen-595x909.jpg)
__Bild: T3N__

How it works?
-------------

Beacons use only the advertisement channel. As the “beacon” name suggests, they transmit packets of data in regular intervals, and this data can be then picked up by devices like smartphones. Hence iBeacons are simply a specific usage of BLE advertisements, with some additional support on the iOS side.
~~~~
02 01 06 1A FF 4C 00 02 15: iBeacon prefix (fixed)
B9 40 7F 30 F5 F8 46 6E AF F9 25 55 6B 57 FE 6D: proximity UUID (here: Estimote’s fixed UUID)
00 49: major
00 0A: minor
C5: 2’s complement of measured TX power
~~~

![](http://www.warski.org/blog/wp-content/uploads/2014/01/bluetooth-le-ibeacon-packet2-300x144.png)




Devices as iBeacons:
--------------------

### iPhone/iPad:
AirLocate is a iPhoneApp to transform your iPhone into a beacon. You must follow this [HOWTO](https://github.com/AppWerft/iBeacontest/blob/master/doku/How-to-Configure-your-iPhone-as-an-iBeacon-Transmitter.pdf?raw=true) 
to build it on your machine.

![](https://github.com/AppWerft/iBeacontest/blob/master/doku/airlocate.png)
### Android:
[Stackoverflow: UPDATE: This is now possible on rooted Android 4.4.3 devices](http://stackoverflow.com/questions/19602913/can-an-android-device-act-as-an-ibeacon)

### OSX:
On newer osx you can use [Maverick as an iBeacon]() to create a iBeacon. You can download and install OSX-binary [here](https://github.com/AppWerft/iBeacontest/blob/master/doku/BeaconOSX.zip). 

iBeaconScanner:
---------------
### iPhone:
AirLocate (above)

#### Android:
a lot of [apps](https://play.google.com/store/search?q=ibeacon&c=apps) ;-))

![](https://lh4.ggpht.com/Riy3wGkz6RDwrHuF_5EnQm_bcvUybzUS-l0TsQcN2BBSTbUyxsFYMKCvQixC1ob_yW2H=w100)
![](https://lh4.ggpht.com/RjEtnJqwOh-Ozg6kgQQaljmWM6tb4jYglOqmAIXb5jfPw2GM7xgltbZlLnAXLQOGfPE=w100)
![](https://lh6.ggpht.com/AageLj4Ae12yYrjUb-E7EsH2SmHXDFEWDc8rsDD36Z3K111kigTaZot-rDaF125jpSI=w100)
![](https://lh5.ggpht.com/EuhbJUeNah_dJFV_PBRo2YQQE7G6vWBlvUsLjp0Mc-JZzOn7cprJnoMt6nZ73drKSn4=w100)
Confifuration of manifest/plist
-------------------------------
~~~
<ios>
        <plist>
            <dict>
                <key>UIBackgroundModes</key>
                <array>
                    <string>location</string>
                    <string>bluetooth-central</string>
                </array>
            </dict>
        </plist>
    </ios>
    <iphone>
        <orientations device="iphone">
            <orientation>Ti.UI.PORTRAIT</orientation>
        </orientations>
        <orientations device="ipad">
            <orientation>Ti.UI.PORTRAIT</orientation>
            <orientation>Ti.UI.UPSIDE_PORTRAIT</orientation>
            <orientation>Ti.UI.LANDSCAPE_LEFT</orientation>
            <orientation>Ti.UI.LANDSCAPE_RIGHT</orientation>
        </orientations>
    </iphone>
~~~
and for Android:
~~~
<android xmlns:android="http://schemas.android.com/apk/res/android">
        <manifest package="de.appwerft.ibeacontest">
            <uses-sdk android:minSdkVersion="10" android:targetSdkVersion="19"/>
            <uses-permission android:name="android.permission.BLUETOOTH"/>
            <uses-permission android:name="android.permission.BLUETOOTH_ADMIN"/>
            <service android:enabled="true" android:exported="true"
                android:isolatedProcess="false" android:label="iBeacon" android:name="com.radiusnetworks.ibeacon.service.IBeaconService"/>
            <service android:enabled="true" android:name="com.radiusnetworks.ibeacon.IBeaconIntentProcessor">
                <meta-data android:name="background" android:value="true"/>
                <intent-filter android:priority="1">
                    <action android:name="de.appwerft.ibeacontest.DID_RANGING"/>
                    <action android:name="de.appwerft.ibeacontest.DID_MONITORING"/>
                </intent-filter>
            </service>
        </manifest>
    </android>
~~~
    
