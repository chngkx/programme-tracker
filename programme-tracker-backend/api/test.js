// api/test.js (optional test endpoint)
export default async function handler(req, res) {
    const envVars = {
        SUPABASE_URL: process.env.SUPABASE_URL ? '✅ Set' : '❌ Missing',
        SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY ? '✅ Set' : '❌ Missing',
        TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN ? '✅ Set' : '❌ Missing',
        TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID ? '✅ Set' : '❌ Missing'
    };
    
    res.status(200).json({
        message: 'Test endpoint',
        environment: process.env.NODE_ENV || 'production',
        environmentVariables: envVars,
        timestamp: new Date().toISOString()
    });
}