module.exports = {
  title: 'WANdisco docs',
  tagline: 'What\'s new',
  url: 'https://wandisco.github.io/wandisco-documentation/',
  baseUrl: '/',
  favicon: href='img/favicon.png',
  organizationName: 'WANdisco',
  projectName: 'wandisco-documentation',
  themeConfig: {
    sidebarCollapsible: true,
    navbar: {
      title: 'WANdisco Fusion',
      logo: {
        alt: 'WANdisco Fusion Logo',
        src: 'img/favicon.png',
      },
      links: [
        {to: 'docs/why-fusion/benefits', label: 'Why Fusion?', position: 'right'},
        {to: 'docs/quickstarts/installation/quickstart-config', label: 'Quickstarts', position: 'right'},
        {to: 'docs/docs/doc1', label: 'Docs', position: 'right'},
        {to: 'docs/glossary/a', label: 'Glossary', position: 'right'},
        //  {doc: 'api/api', label: 'API', position: 'right'},
        {to: 'docs/help/need_help', label: 'Help', position: 'right'},
      ],
    },
    algolia: {
      apiKey: '47ecd3b21be71c5822571b9f59e52544',
      indexName: 'docusaurus-2',
      algoliaOptions: {},
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/quickstarts/'
            },
            {
              label: 'Product User Guides',
              href: 'https://docs.wandisco.com'
            }
          ]
        },
        {
          title: 'Community',
          items: []
        },
        {
          title: 'More',
          links: []
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WANdisco, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
