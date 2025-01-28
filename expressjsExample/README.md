## Express.js Security Examples
This example uses a client + server with an existing atlas MongoDB Server (no DB setup required usig the provided MONGO_URL). To run use the following commands for the front-end:
```
cd client
npm install
npm run start
```
and these commands for the back-end:
```
cd server
npm install
npm run start
```

once running successfully, you will see an area to register and another for login...

### Activity #1: Disposable Email Registration
The registration uses a disposable email block list which matches the input email against a known list of disposable emails.

This list is from a maintained repository [here](https://github.com/disposable-email-domains/disposable-email-domains)

#### Somethings to think about:
1. What type of attack does this prevent?
2. How can a threat actor evade this type of defence?
3. What are some ways to improve this system?


### Activity #2: NoSQL Injection
The login is vulnerable to injection attack allowing an attacker to circumvent authentication.

Things to try out:
1. Update the login endpoint to stringify the username and password
2. Update the login endpoint to sanitize the username and password (ensure special characters are escaped). Hint: use an NPM package
3. Validate the input such that only an email is allowed to be used as the username in the login endpoint. Hint: use a regex or an NPM package


### Activity #3: Password strength
A common way to encourage users to use stronger passwords is to provide feedback and set standards. While rules can be added (and should) one easy way is to simplify it with a score out of 5.

using [this](https://www.npmjs.com/package/zxcvbn) package you can check easily check the password strength.

Try to install this package and apply it to the registration so that:
1. A user gets a score out of 5 telling them how good their password is when they register
2. prevent a user from registering with a password that is less than a 3 out of 5 strength score


### Activity #4: Web Application Firewall
Web application Firewalls (WAF) are handy ways to set protections on your endpoints so that common attacks are blocked and known threat actors are prevented from interacting from your application. For this exercise we will be using [easy-waf](https://www.npmjs.com/package/easy-waf)

Some things to try out:
1. Find a block list and apply it to the WAF
2. Add the ability to use PUT endpoints
