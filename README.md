# Question Setting App

<p align="justify">This is a technical guide for a browser-based question setting app. This app helps the user to create a new question about a location, add possible answers and upload questions to a database on the webserver. Users can decide the location of the question by clicking on a point on a Leaflet map. Apart from that, user can choose to delete the questions they have created or the answers they have made by using the related function on the app. This app is also able to retrieve existed questions of certain characteristics and information of users from the database, such as show the participation rates for all users and list 5 most difficult questions. A user guide included in the app can give some brief introductions to users on how to use this app.</p>

## Table of Contents
* System Requirements
* Deployment
* Testing
* File description
* Code reference

## 1. System Requirements
* <p align="justify">In order to enable the full functionality of this app, a browser that supports geolocation access via https connection is required. So most browsers can be used for this app. In order to make sure the app can locate and zoom into user positions, it is recommended to use Chrome(Version 73.0.3683.75 or above) or Safari(Version 13.1 or above) for this app.</p>

* <p align="justify">This app requires to make connections to a Ubuntu Server (Virtual Machine). You could use BitVise, Pycharm (Version 2018.3.5 Professional Edition) or other SSH software to connect to the Ubuntu Server.</p>

* <p align="justify">If you are going to use this app outside the UCL campus (not connected to Eduroam), make sure you are connected to UCL VPN by following the instructions at https://www.ucl.ac.uk/isd/services/get-connected/remote-working-services/ucl-virtualprivate-network-vpn.</p>

## 2. Deployment
* <p align="justify">Procedures to deploy this app:</p>

<p align="justify">1. Clone the source code of this question setting app from Github to CEGE server at <code>home/studentuser/code</code> by typing in the command line (terminal) window for Ubuntu:</p>

```javascript
cd /home/studentuser/code
git clone https://github.com/ucl-geospatial/cege0043-apps-liuzongshi123
```

<p align="justify">2. Clone the source code of the corresponding Node JS server from Github to CEGE server at <code>home/studentuser/code</code>.</p>

```javascript
cd /home/studentuser/code
git clone https://github.com/ucl-geospatial/cege0043-data-api-liuzongshi123
```

<p align="justify">3. Go to the <code>cege0043-data-api-liuzongshi123</code> folder and start the Node JS server.</p>

```javascript
cd /home/studentuser/code/cege0043-data-api-liuzongshi123
pm2 start dataAPI.js
```

<p align="justify">4. Go to the <code>cege0043-apps-liuzongshi123</code> folder and start the app server.</p>

```javascript
cd /home/studentuser/code/cege0043-apps-liuzongshi123
pm2 start app.js
```

<p align="justify">5. Make sure the Node JS server is successfully started. If any error occurs, you could enter the debug mode through the command line window by typing:</p>

```javascript
cd /home/studentuser/code/cege0043-data-api-liuzongshi123
node dataAPI.js
```

## 3. Testing
* <p align="justify">Procedures to test this app:</p>

<p align="justify">1. Make sure your device is connected to UCL Wifi or UCL VPN.</p>

<p align="justify">2. Make sure the Node JS server and app server is active.</p>

<p align="justify">3. In a browser that supports geolocation access via https connection, type the following address to use the question setting app: https://developer.cege.ucl.ac.uk:31083/main.html</p>

<p align="justify">4. While testing the functionality of this map, use of <code>Inspect</code> or <code>Developer mode</code> of the browser to see if any error occurs.</p>


## 4. File description

<p align="justify">The files associated te this question setting app are located in the <code>cege0043-apps-liuzongshi123</code> folder and several subfolders.</p>

* `cege0043-apps-liuzongshi123`

<p align="justify"><code>main.html</code>: The main html file of this app, through which user could use all the question setting functionality. It interconnects all of the resources within the <code>cege0043-apps-liuzongshi123</code> folder and makes use of them. This html contains several divs and menu buttons.</p>

* div:
<div align="justify">
<table><thead><tr><th>ID</th><th>Description</th></tr></thead><tbody align="center"><tr><td>1</td><td>1</td></tr></tbody></table>
</div>







