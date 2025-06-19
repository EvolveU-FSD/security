import { S3 } from 'aws-sdk'; 
import { rateLimitMiddleware } from '../../middleware/rateLimiter.js'

export async function GET(req) { 
    if(rateLimitMiddleware(req)) {
        return new Response(JSON.stringify({ message: 'Too Many Requests' }), { status: 429 });
    }
    // const { searchParams } = new URL(req.url); 
    // const fileName = searchParams.get('fileName'); 
    // const s3 = new S3({ 
    //     accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
    //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, 
    //     region: process.env.AWS_REGION
    // }); 
    // const params = { Bucket: process.env.AWS_S3_BUCKET, Key: fileName, }; 
    
    try { 
        // const data = await s3.getObject(params).promise(); 
        return new Response(JSON.stringify({ msg: "success!" }), { status: 200 }); 
    } catch (error) { 
        return new Response(JSON.stringify({ error: error.message }), { status: 500 }); 
    } 
}