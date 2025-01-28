# Exposed Key example
This exercise is to simply show how a key can get exposed and how to prevent exposing it.
## to run this example
### step 1:
From this directory, start the backend server: `node exposedKey.js`

### step 2:
run indexBad.html with live server. Once running open the developer tools and observe the sources and the network tab as the "Fetch Data" button is clicked.

Observe how the api Key "YOUR_SECRET_API_KEY" is available through developer tools

### step 3:
run indexGood.html with live server. Once running open the developer tools and observe the sources and the network tab as the "Fetch Data" button is clicked.

Observe how the API Key is no longer available via the front end and how the backend contains the key instead, passing the key along to an internal endpoint.