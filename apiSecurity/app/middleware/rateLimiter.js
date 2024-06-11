const rateLimitMap = new Map();

export function rateLimitMiddleware(req) {
    console.log("Checking Limits")
    const ip = req.headers.get('x-forwarded-for')
        const limit = 5; // Limiting requests to 5 per minute per IP
        const windowMs = 60 * 1000; // 1 minute
        
        if (!rateLimitMap.has(ip)) {
            rateLimitMap.set(ip, {
                count: 0,
                lastReset: Date.now(),
            });
        }
        
        const ipData = rateLimitMap.get(ip);
        
        if (Date.now() - ipData.lastReset > windowMs) {
            ipData.count = 0;
            ipData.lastReset = Date.now();
        }
        
        if (ipData.count >= limit) {
            console.log("Limit reached!")
            return true; 
        }
        
        ipData.count += 1;
}