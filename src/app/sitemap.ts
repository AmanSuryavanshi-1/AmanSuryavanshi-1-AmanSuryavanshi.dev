// app/sitemap.ts
export default async function sitemap() {
const SITE_URL = "https://amansuryavanshi-dev.vercel.app/";
    const routes = [
      '',
      '/about',
      '/projects',
      '/blog',
      '/contact',
    ].map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
    }));
  
    return routes;
  }