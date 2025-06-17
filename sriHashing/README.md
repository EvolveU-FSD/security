This is an HTML/JS example

## Getting Started

You can run this exercise using live server for index.html


This project uses jquery from a publically accessible CDN.

## Activity: SRI Hashing
Modern browsers support SRI Hashing for imported scripts. This can be used to prevent manipulated external dependencies. Try the following exercises:

1. Replace the script tag importing jquery to apply SRI hashing at SHA256, SHA384, and SHA512

2. Try applying SRI check to the script.js file. After applying SRI, try updating the script.js file to observer the browser refuse to load it.

3. Apply a fallback option for each script to use incase the SRI check fails