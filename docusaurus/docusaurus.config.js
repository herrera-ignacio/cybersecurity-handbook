// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  organizationName: "herrera-ignacio",
  projectName: "cybersecurity-handbook",
  deploymentBranch: "gh-pages",
  title: 'Cybersecurity Handbook',
  tagline: 'Cybersecurityh handbook',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://herrera-ignacio.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cybersecurity-handbook/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex]
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true
        }
      },
      navbar: {
        title: 'Cybersecurity Handbook',
        items: [
          {
            href: 'https://www.linkedin.com/in/ignacioromanherrera/',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            href: 'https://github.com/herrera-ignacio/cybersecurity-handbook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
