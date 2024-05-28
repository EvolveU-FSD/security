# Path Traversal Exploitation
## to run this example
### step 1:
Within this directory, start the *bad* backend server: `node pathTraversalBad.js`

### step 2:
open postman and make a get request for the URL `localhost:3000/download?file=chicken.pdf` or do a curl command `curl --location 'localhost:3000/download?file=chicken.pdf' \
--header 'Content-Type: application/x-www-form-urlencoded' --output outfile.pdf`

This will allow you to intentionally download a pdf in the "files" directory. however this will also allow you to travese the directory structure allowing you to access the "taxes" folder, which is not intended!

to access the secret file in the "taxes" directory make this get request in postman: `localhost:3000/download?file=../taxes/yougotthis.gif`
or do this curl command: `curl --location 'localhost:3000/download?file=../taxes/yougotthis.gif' \
--header 'Content-Type: application/x-www-form-urlencoded' --output yougotthis.gif`

Observe that using that the endpoint has accepted the linux command "../" in order to traverse anywhere in the insecure server's file system. This can lead to data leakage and far worse!


### step 3:
Within this directory, start the *good* backend server: `node pathTraversalGood.js`

Repeating the above steps, accessing beyond the "files" directory should be unavailable now.