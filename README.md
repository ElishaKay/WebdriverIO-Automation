"# webdriverio-with-page-objects" 

<img src="qAndA.PNG">

<a href="https://medium.com/@acoyfellow/mass-linkedin-request-without-3rd-party-software-dff998aedd23">Template for Social Media Automation</a>


<a href="http://www.webdriverjs.com/a-basic-example-for-webdriverio-test/">Prerequisites - Install and run selenium-standalone in the background</a>

cd into the directory and run:

node ./test/specs/WithoutWdioClient.js

How to Run?
Run the below command in CommandPrompt/Terminal to install selenium server utility.

npm install -g selenium-standalone
Run the below command in CommandPrompt/Terminal to update selenium standalone server and browser drivers to latest versions.

selenium-standalone install
Run the below command in CommandPrompt/Terminal to run selenium server.

selenium-standalone start
Open a new CommandPrompt/Terminal and run the below command to execute WebdriverIo test.

node ./test/specs/WithoutWdioClient.js
You should see a browser opened and navigated to google website and closed. It’s very quick.



After all the questions have been fetched, run this DB Query to delete the img records that equal "www.pizzahut.com"

UPDATE question SET img = null WHERE img="www.pizzahut.com"