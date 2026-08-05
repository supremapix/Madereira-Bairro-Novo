import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

import { COMPANY_DATA } from './src/data/company';
import { PRODUCTS_DATA } from './src/data/products';
import { LOCATIONS_DATA } from './src/data/locations';
import { BLOG_POSTS_DATA } from './src/data/blog';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Serve static files from public directory (favicons, robots, sitemaps)
  const publicPath = path.join(process.cwd(), 'public');
  if (fs.existsSync(publicPath)) {
    app.use(express.static(publicPath, { maxAge: '1d' }));
  }

  // Explicit Favicon routes for Google Search crawler
  app.get('/favicon.ico', (req, res) => {
    const icoPath = path.join(publicPath, 'favicon.ico');
    if (fs.existsSync(icoPath)) {
      res.setHeader('Content-Type', 'image/x-icon');
      res.sendFile(icoPath);
    } else {
      res.status(404).end();
    }
  });

  // API Health Check
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      company: COMPANY_DATA.name,
      timestamp: new Date().toISOString()
    });
  });

  // Dynamic Sitemap XML Handlers
  app.get('/sitemap.xml', (req, res) => {
    res.header('Content-Type', 'application/xml');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${COMPANY_DATA.canonicalUrl}/sitemap-pages.xml</loc></sitemap>
  <sitemap><loc>${COMPANY_DATA.canonicalUrl}/sitemap-products.xml</loc></sitemap>
  <sitemap><loc>${COMPANY_DATA.canonicalUrl}/sitemap-blog.xml</loc></sitemap>
  <sitemap><loc>${COMPANY_DATA.canonicalUrl}/sitemap-locations.xml</loc></sitemap>
  <sitemap><loc>${COMPANY_DATA.canonicalUrl}/sitemap-images.xml</loc></sitemap>
</sitemapindex>`);
  });

  app.get('/sitemap-pages.xml', (req, res) => {
    res.header('Content-Type', 'application/xml');
    const pages = ['', '/produtos', '/regioes-atendidas', '/blog', '/sobre', '/contato'];
    const urls = pages
      .map(
        (p) => `
  <url>
    <loc>${COMPANY_DATA.canonicalUrl}${p}</loc>
    <changefreq>daily</changefreq>
    <priority>${p === '' ? '1.0' : '0.8'}</priority>
  </url>`
      )
      .join('');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`);
  });

  app.get('/sitemap-products.xml', (req, res) => {
    res.header('Content-Type', 'application/xml');
    const urls = PRODUCTS_DATA.map(
      (p) => `
  <url>
    <loc>${COMPANY_DATA.canonicalUrl}/produto/${p.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`
    ).join('');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`);
  });

  app.get('/sitemap-blog.xml', (req, res) => {
    res.header('Content-Type', 'application/xml');
    const urls = BLOG_POSTS_DATA.map(
      (b) => `
  <url>
    <loc>${COMPANY_DATA.canonicalUrl}/blog/${b.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    ).join('');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`);
  });

  app.get('/sitemap-locations.xml', (req, res) => {
    res.header('Content-Type', 'application/xml');
    const urls = LOCATIONS_DATA.map(
      (l) => `
  <url>
    <loc>${COMPANY_DATA.canonicalUrl}/${l.type === 'bairro' ? 'bairro' : 'cidade'}/${l.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    ).join('');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`);
  });

  app.get('/sitemap-images.xml', (req, res) => {
    res.header('Content-Type', 'application/xml');
    const urls = PRODUCTS_DATA.map(
      (p) => `
  <url>
    <loc>${COMPANY_DATA.canonicalUrl}/produto/${p.slug}</loc>
    <image:image xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      <image:loc>${p.imageUrl}</image:loc>
      <image:title>${p.name} - Madeireira Bairro Novo Curitiba</image:title>
    </image:image>
  </url>`
    ).join('');
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urls}
</urlset>`);
  });

  // Vite Middleware or Express Static Fallback for SSR / Pre-rendering HTML Meta Injection
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));

    // Express v4 fallback catch-all
    app.get('*', (req, res) => {
      const indexPath = path.join(distPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).send('Not Found');
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Madeireira Bairro Novo Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
