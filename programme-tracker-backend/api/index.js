// api/index.js (optional root endpoint)
export default function handler(req, res) {
    res.status(200).json({
        name: 'Programme Tracker Notification API',
        version: '1.0.0',
        endpoints: {
            checkProgrammes: '/api/check-programmes',
            test: '/api/test'
        },
        documentation: {
            checkProgrammes: {
                method: 'GET',
                description: 'Checks for programmes needing notifications',
                parameters: {
                    force: 'Set to true to bypass time check (for testing)'
                }
            }
        }
    });
}