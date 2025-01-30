This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, you will need to create an .env file at the root of the project to enable the blob storage features:

.env:
```
AWS_ACCESS_KEY_ID=<your key>
AWS_SECRET_ACCESS_KEY=<your secret>
AWS_REGION=<region with your bucket>
AWS_S3_BUCKET=<your bucket name>
```
If you are in session these credentials can be shared by the facilitator

Next, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Activity 1: Headers and CSP
Within Next.js headers and CSP are controlled in the next.config file. Review this file to get a sense of how each is structured. Once you get a chance to explore here are a few things to try out:

1. Add a CSP rule for using an external script or style (like google fonts). Purposely violate the CSP and obeserve the behaviour

2. Add a new header. Impliment HSTS and observe the header added in developer tools on network requests.

## Activity 2: Rate Limiting with Middleware
A simple defence against DoS attacks is implementing a rate limiter. These are typically used in middleware to determine if requests are incoming too frequently from a single source (IP address). 

Observe the app/middleware/rateLimiter.js file. In particular notice the "limit" and "windowMs" values. these determine the thresholds for when to trigger a rate limit.

Often the trick is to allow enough traffic to pass through so that humans (or even some robots) can use the site without accidentally triggering the rate limit, but strict enough to block bad traffic.

Some things to try out:

1. Set the limits so that normal human usage gets blocked
2. Set a higher limit, allowing normal users to use the app, but try to trigger the rate limit using automated means (i.e. an outside script or using Postman).
