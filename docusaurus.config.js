module.exports = {
  title: 'Reseach DAO Docs',
  tagline: 'Research DAO Documentation',
  url: 'https://docs.researchdao.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'researchdao',
  projectName: 'docs',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      style: 'dark',
      title: 'Research DAO',
      logo: {
        alt: 'Research DAO Logo',
        src: 'img/logo.svg',
        href: 'https://researchdao.io'
      },
      items: [
        {
          href: 'https://github.com/researchdao/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Research DAO`,
    },
    announcementBar: {
      id: 'fc22',
      content: 'Now funding travel for students accepted to present at FC22. [<a rel="noopener noreferrer" href="/eligibility">Apply</a>]',
      backgroundColor: 'rgb(66, 153, 225)',
      textColor: 'white',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'content',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/researchdao/docs/edit/main/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
