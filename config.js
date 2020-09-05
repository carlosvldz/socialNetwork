module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || '0GCeXVTIi6',
        password: process.env.MYSQL_PASS || 'WTV41XU29p',
        database: process.env.MYSQL_DB || '0GCeXVTIi6',
    },
}