/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.photographe-mariage-toulouse.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/mentions-legales', '/politique-confidentialite'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/_next/'] },
    ],
    additionalSitemaps: [
      'https://www.photographe-mariage-toulouse.com/server-sitemap.xml',
    ],
  },
  additionalPaths: async () => {
    return [
      {
        loc: '/',
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/photographe-mariage-toulouse',
        changefreq: 'weekly',
        priority: 0.95,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/photographe-mariage-pyrenees',
        changefreq: 'monthly',
        priority: 0.85,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/photographe-mariage-cote-basque',
        changefreq: 'monthly',
        priority: 0.85,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/portfolio',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/a-propos',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/offres',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/contact',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/blog',
        changefreq: 'weekly',
        priority: 0.75,
        lastmod: new Date().toISOString(),
      },
    ]
  },
}

module.exports = config
