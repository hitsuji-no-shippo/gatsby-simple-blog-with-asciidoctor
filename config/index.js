const author = {
  name: 'hitsuji no shippo',
  email: 'xxx@yyy.zzz',
  url: 'https://github.com/hitsuji-no-shippo',
  twitter: 'hns_equal_st',
}

const site = {
  pathPrefix: '/',
  title: 'Gatsby Starter Blog',
  description: 'A starter blog with asciidoctor.',
  siteUrl: 'https://lucid-bell-34419c.netlify.com',  // demo site url
  social : {
    twitter: author.twitter,
  },
  disqusShortName: 'gatsby-simple-blog',
  googleTrackingId: '',
  lang: 'en',
  displayTranslations: true,
};

const supportedLanguages = {
  en: 'English',
  ja: '日本語',
};

const repository = {
  url: 'https://github.com/hitsuji-no-shippo/gatsby-simple-blog-with-asciidoctor',
  name: 'gatsby-simple-blog-with-asciidoctor',
  displaysLink: true,
}

const articles = {
  dir: 'hitsuji-no-shippo/sample-posts-with-asciidoc',
  isOtherRepositroy: true,
  filePath: { Asciidoc: 'paths.from.source.full' },
  ignore: ['asciidoc-examples/**/*.adoc'],
};

const linksInBio = {
  twitter: 'https://twitter.com/hns_equal_st',
  GitHub: 'https://github.com/hitsuji-no-shippo',
}

const dateDisplay = {
  format: "LL",
  diff: {
    patternWithNotConvert: /month|year/,
    newPost: {
      boundary: 7,
      emoji: '🎉',
    },
  },
}

module.exports = {
  author,
  site,
  supportedLanguages,
  repository,
  articles,
  linksInBio,
  dateDisplay,
};
