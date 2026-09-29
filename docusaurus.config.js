// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nivelamento PETee',
  favicon: 'img/PETee_logo.png',

  future: {
    v4: true, 
  },

  
  url: 'https://PETEngenhariaEletricaUFRN.github.io',
  baseUrl: '/nivelamento-petee/',

  organizationName: 'PETEngenhariaEletricaUFRN', 
  projectName: 'nivelamento-petee',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          

        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs:{
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'PETee',
        logo: {
          alt: 'PETee Logo',
          src: 'img/PETee_logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'Sidebar',
            position: 'left',
            label: 'Exercícios',
          },
          {
            href: 'https://github.com/PETEngenhariaEletricaUFRN',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Exercicios',
                to: '/docs/intro',
              },
            ],
          },
          {
          },
          {
            title: 'Redes Sociais',
            items: [
              {
                label: 'Instagram',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'GitHub',
                href:'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
