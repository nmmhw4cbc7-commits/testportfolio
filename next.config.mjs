/** @type {import('next').Config} */
const nextConfig = {
  output: 'export', // Zwingt Next.js, eine statische HTML-Version (out-Ordner) zu exportieren
  basePath: '/testportfolio', // Entspricht exakt deinem Repository-Namen auf GitHub
  images: {
    unoptimized: true, // Erforderlich, da GitHub Pages keine dynamische Bildoptimierung unterstützt
  },
};

export default nextConfig;
