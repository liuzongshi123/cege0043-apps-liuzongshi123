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

* **`cege0043-apps-liuzongshi123`**

<p align="justify"><code>main.html</code>: The main html file of this app, through which user could use all the question setting functionality. It interconnects all of the resources within the <code>cege0043-apps-liuzongshi123</code> folder and makes use of them. This html contains several divs and menu buttons.</p>

* div:

<table align="center">
	<thead align="center"><tr>
		<th>ID</th>
		<th>Description</th>
		</tr></thead>
		<tbody align="center">
			<tr>
			<td><code>wrapper</code></td>
			<td align="center">Hold the <code>Sidebar</code> and <code>Main Content</code>.</td>
			</tr>
			<tr>
			<td><code>Sidebar</code></td>
			<td align="center">Hold all buttons.</td>
			</tr>
			<tr>
			<td><code>Main Content</code></td>
			<td align="center">Hold the <code>mapContainer</code>, <code>question_creation</code>, <code>modification</code> and <code>FiveDifficultPoint</code>.</td>
			</tr>
			</tr>
			<tr>
			<td><code>mapContainer</code></td>
			<td align="center">Hold the leaflet map.</td>
			</tr>
			<tr>
			<td><code>question_creation</code></td>
			<td align="center">Hold the question creation form.</td>
			</tr>
			<tr>
			<td><code>modification</code></td>
			<td align="center">Hold the form to delete question and answer in database.</td>
			</tr>
			</tr>
			<tr>
			<td><code>FiveDifficultPoint</code></td>
			<td align="center">Hold the list to show five difficult quesitons in database.</td>
			</tr>
	</tbody>
	</table>

* Button:
<table align="center">
	<thead align="center"><tr>
		<th>Name</th>
		<th>Description</th>
		</tr></thead>
		<tbody align="center">
			<tr>
			<td><code>Start Creation</code> in <strong>Create Questions</strong></td>
			<td align="center">Start the clip event on leaflet map which declide the location of the question.<br>
			Hold the button <code>Creation Question Here</code>.</td>
			</tr>
			<tr>
			<td><code>Creation Question Here</code></td>
			<td align="center">Load the question creation form</td>
			</tr>
			<tr>
			<td><code>Delete Creation</code> in <strong>Create Questions</strong></td>
			<td align="center">Load the delete form to delete question and answer in database.</td>
			</tr>
			<tr>
			<td><code>Stop Creation</code>in <strong>Create Questions</strong></td>
			<td align="center">Hide the question creation form or delete form.</td>
			</tr>
			<tr>
			<td><code>Load Points</code> in <strong>Existing Points</strong></td>
			<td align="center">Load all the existing quiz points created by the current user.</td>
			</tr>
			<tr>
			<td><code>Remove Existing Points</code> in <strong>Existing Points</strong></td>
			<td align="center">Remove the existing quiz points created by the current user.</td>
			</tr>
			<tr>
			<td><code>Load Points</code> in <strong>Closest 5 Points</strong></td>
			<td align="center">Load the closest five points to your current location created by all users.</td>
			</tr>
			<tr>
			<td><code>Remove Points</code> in <strong>Closest 5 Points</strong></td>
			<td align="center">Remove the closest five points to your current location created by all users.</td>
			</tr>
			<tr>
			<td><code>Load Questions</code> in <strong>Diffcult 5 Questions</strong></td>
			<td align="center">Load the most difficult five questions created by any user where most wrong answers were given.</td>
			</tr>
			<tr>
			<td><code>Remove Questions</code> in <strong>Diffcult 5 Questions</strong></td>
			<td align="center">Remove the most difficult five questions created by any user where most wrong answers were given.</td>
			</tr>
			<tr>
			<td><code>Load Questions</code> in <strong>Added Questions</strong></td>
			<td align="center">Load the points added in the last week by any user.</td>
			</tr>
			<tr>
			<td><code>Remove Questions</code> in <strong>Added Questions</strong></td>
			<td align="center">Remove the points added in the last week by any user.</td>
			</tr>
			<tr>
			<td><code>All User Rates</code> in <strong>Participation Rates</strong></td>
			<td align="center">Load a histogram of daily participation rates of all users in the database during last week, including how many questions have been answered and how many answers were correct.</td>
			</tr>
			<tr>
			<td><code>My Rates</code> in <strong>Participation Rates</stronge></td>
			<td align="center">Load a histogram of daily participation rates of the current user during last week, including how many questions have been answered and how many answers were correct.</td>
			</tr>
			<tr>
			<td><code>Remove Graph</code> in <strong>Participation Rates</strong></td>
			<td align="center">Remove the histogram and reload leaflet map.</td>
			</tr>
			<tr>
			<td><code>Help</code></td>
			<td align="center">Link to the <code>Help_question.html</code> which contain a breif introduction to this app.</td>
			</tr>
	</tbody>
	</table>

* svg:

<table align="center">
	<thead align="center"><tr>
		<th>ID</th>
		<th>Description</th>
		</tr></thead>
		<tbody align="center">
			<tr>
			<td><code>participationRateAll</code></td>
			<td align="center">Hold the histogram of daily participation rates of all users in the database during last week.</td>
			</tr>
			<tr>
			<td><code>participationRateMy</code></td>
			<td align="center">Hold the histogram of daily participation rates of the current user during last week.</td>
			</tr>
	</tbody>
	</table>

<br>

<p align="justify"><code>Help_question.html</code>: The main html file contain the brief introduction to this app.</p>

<br>
<br>

* **`cege0043-apps-liuzongshi123/js`**: Containing Javascript files required by `main.html`.

`leaflet.awesome-markers.js`:  Add colorful iconic markers for Leaflet.

<br>

`icon.js`:  Create several global varibles for different colored icon.

<br>

`basicMap.js`:  Create a global varible global variable to store the map. Contain two functions to load the leaflet map.

<table align="center">
	<thead align="center"><tr>
		<th>Function</th>
		<th>Description</th>
		</tr></thead>
		<tbody align="center">
			<tr>
			<td><code>getLocation()</code></td>
			<td align="center">Get curry Loction of user and pass it to function <code>loadLeafletMap()</code>.</td>
			</tr>
			<tr>
			<td><code>loadLeafletMap()</code></td>
			<td align="center">Load the leaflet map and zoom to current position of users.</td>
			</tr>
	</tbody>
	</table>

<br>

`utilities.js`: 

<table align="center">
	<thead align="center"><tr>
		<th>Function</th>
		<th>Description</th>
		</tr></thead>
		<tbody align="center">
			<tr>
			<td><code>getPorts()</code></td>
			<td align="center">Get user port numbers, which are required to build database connections for data uploading and downloading.</td>
			</tr>
	</tbody>
	</table>

<br>

`menu.js`:  Contain functions for <strong>Create Questions</strong> part.

<table align="center">
	<thead align="center"><tr>
		<th>Function</th>
		<th>Description</th>
		</tr></thead>
		<tbody align="center">
			<tr>
			<td><code>clickEvent()</code></td>
			<td align="center">Open the click event on leaflet map.</td>
			</tr>
			<tr>
			<td><code>onMapClick()</code></td>
			<td align="center">Add a marker on leaflet map for user's click and open the popup for user's click which conatin the location of click. The popup also conatin the button <code>Create Question Here</code>.</td>
			</tr>
			<tr>
			<td><code>removeclickLayers()</code></td>
			<td align="center">Remove the extra click marker on leaflet map.</td>
			</tr>
			<tr>
			<td><code>StartCreation()</code></td>
			<td align="center">Load question creation form after user click <code>Create Question Here</code> button and hide other useless things.</td>
			</tr>
			<tr>
			<td><code>modification()</code></td>
			<td align="center">Load delete form after user click <code>Delete Creation</code> button and hide other useless things.</td>
			</tr>
			<tr>
			<td><code>StopCreation()</code></td>
			<td align="center">Hide the question creation form or delete form after user click <code>Stop Creation</code> button.</td>
			</tr>
	</tbody>
	</table>

<br>

`popup.js`: Contain functions for <strong>Existing Points</strong> part.

<table align="center">
	<thead align="center"><tr>
		<th>Function</th>
		<th>Description</th>
		</tr></thead>
		<tbody align="center">
			<tr>
			<td><code>getFormData()</code></td>
			<td align="center">Ajax link to get existing question points of current user in database.</td>
			</tr>
			<tr>
			<td><code>loadFormData()</code></td>
			<td align="center">Add existing points to leaflet map.</td>
			</tr>
			<tr>
			<td><code>removeFormData()</code></td>
			<td align="center">Remove existing points on leaflet map.</td>
			</tr>
	</tbody>
	</table>

<br>

`FiveClosestPoint.js`: Contain functions for <strong>Closest 5 Points</strong> part.

<table align="center">
	<thead align="center"><tr>
		<th>Function</th>
		<th>Description</th>
		</tr></thead>
		<tbody align="center">
			<tr>
			<td><code>LoadUserLocation()</code></td>
			<td align="center">Get current location of user and pass it to <code>GetFiveClosestPoint()</code> function.</td>
			</tr>
			<tr>
			<td><code>GetFiveClosestPoint()</code></td>
			<td align="center">Ajax link to get points from database.</td>
			</tr>
			<tr>
			<td><code>loadFiveClosestPoint()</code></td>
			<td align="center">Get the data of five closest points and add them to leaflet map.</td>
			</tr>
			<tr>
			<td><code>RemoveFiveClosestPoint()</code></td>
			<td align="center">Remove five closest points on leaflet map.</td>
			</tr>
	</tbody>
	</table>

<br>

`FiveDifficultPoint.js`: Contain functions for <strong>Difficult 5 Questions</strong> part.

<table align="center">
	<thead align="center"><tr>
		<th>Function</th>
		<th>Description</th>
		</tr></thead>
		<tbody align="center">
			<tr>
			<td><code>getFiveDifficultPoint()</code></td>
			<td align="center">Ajax link to get questions from database and pass them to <code>loadFiveDifficultPoint()</code> function.</td>
			</tr>
			<tr>
			<td><code>loadFiveDifficultPoint()</code></td>
			<td align="center">Creat a list to show five questions and show the list to user. Then hide the other useless things.</td>
			</tr>
			<tr>
			<td><code>RemoveFiveDifficultPoint()</code></td>
			<td align="center">Remove the question list and reload the leaflet map.</td>
			</tr>
	</tbody>
	</table>

<br>

`QuestionLastWeek.js`: Contain functions for <strong>Added Questions</strong> part.

<table align="center">
	<thead align="center"><tr>
		<th>Function</th>
		<th>Description</th>
		</tr></thead>
		<tbody align="center">
			<tr>
			<td><code>getQuestionLastWeek()</code></td>
			<td align="center">Ajax link to get question points from database and pass them to <code>loadQuestionLastWeek()</code> function.</td>
			</tr>
			<tr>
			<td><code>loadQuestionLastWeek()</code></td>
			<td align="center">Load the points added in the last week by any user and add them to leaflet map.</td>
			</tr>
			<tr>
			<td><code>RemoveQuestionLastWeek()</code></td>
			<td align="center">Remove points on leaflet map.</td>
			</tr>
	</tbody>
	</table>

<br>

`participationRate.js`: Contain functions for <strong>Participation Rates</strong> part.

<table align="center">
	<thead align="center"><tr>
		<th>Function</th>
		<th>Description</th>
		</tr></thead>
		<tbody align="center">
			<tr>
			<td><code>participationRateAll()</code></td>
			<td align="center">Get the participation rates data for all users from database and draw a histogram to show the data. Then hide the other useless things.</td>
			</tr>
			<tr>
			<td><code>participationRateMy()</code></td>
			<td align="center">Get the participation rates data for current user from database and draw a histogram to show the data. Then hide the other useless things.</td>
			</tr>
			<tr>
			<td><code>RemoveparticipationRate()</code></td>
			<td align="center">Remove all users' participation rates histogram or current user's participation rates histogram and reload the leaflet map.</td>
			</tr>
	</tbody>
	</table>

## 5. Code reference

* <p align="justify">A large proportion of codes are adapted from the lab notes of <strong>CEGE 0043 Web Mobile and GIS by Calire Ellul</strong>, including Basic structures of all <code>.html</code> files. Functions related to events detector, data downloading, data uploading, data processing, user location tracking, displaying map layers, and getting port numbers.</p>

* <p align="justify">May layers of this app are based on <strong>Leaflet</strong>.</p>

* <p align="justify">The base map data is based on <strong>Open Street Map<strong>.</p>

* <p align="justify">The utility of changing div contents of one <code>.html</code> by contents of another <code>.html</code> provided by <strong>W3 schools</strong>.</p>

* <p align="justify">Many basic functions related to how to structure different things on web page, such as how to adjust the location of the text, how to hide or display the <code>div</code>, or how to make the input box colored in red and show wrong message if user do not fill the input box. [provided by <strong>RUNOOB.COM</strong>].</p>

* <p align="justify">How to add legends and create double column for D3 Graph from <strong>https://www.cnblogs.com/chenjy1225/p/10982481.html</strong> accessed 8th April 2020.</p>

* <p align="justify">How to add axis labels and title for D3 Graph from <strong>https://www.cnblogs.com/MockingBirdHome/p/3368739.html</strong> accessed 8th April 2020.</p>

* <p align="justify">Change the image of bootStrap icon based on <strong>https://fontawesome.com/</strong> accessed 5th April 2020..</p>