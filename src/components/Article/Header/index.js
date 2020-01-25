import React from 'react';
import PropTypes from 'prop-types';

import TagList from 'components/TagList';
import AccessoryInformations from 'components/AccessoryInformations';

import { rhythm, scale } from 'utils/typography';

import TranslationsLink from './TranslationsLink';


const Header = ({post, slug, translationsLink, languageContexts}) => {
  return (
    <header>
      <h1>{post.document.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        <AccessoryInformations
          dateStr={post.revision.date}
          timeToRead={post.timeToRead}
          disqus={{
            id: post.id,
            title: post.document.title,
            slug,
            show: post.pageAttributes.disqus !== false,
          }}
          author={{
            name: post.author.fullName,
            url: post.pageAttributes.author_url,
            twitter: post.pageAttributes.author_twitter,
          }}
        />
      </p>

      {post.pageAttributes.tags &&
       <TagList tags={post.pageAttributes.tags}
        baseUrl={`${languageContexts.homeLink}tags`} />}
      <TranslationsLink
        translationsLink={translationsLink}
        style={{ margin: '-0.5rem 0 1.5rem' }}
      />
    </header>
  );
}

Header.propTypes = {
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  translationsLink: PropTypes.array.isRequired,
  languageContexts: PropTypes.object.isRequired,
};

export default Header;
