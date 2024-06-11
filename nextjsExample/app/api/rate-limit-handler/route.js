export default function handler(req, res) {
    res.status(429).json({ message: 'Rate Limit Exceeded'})
}