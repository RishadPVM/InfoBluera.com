/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://infobluera.com',
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
    exclude: ['/server-sitemap.xml'], // <= exclude here
}
