import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({title, description, name, type, keywords, siteName}) {
    return (
        <Helmet>
            { /* Standard metadata tags */ }
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            { /* End standard metadata tags */ }
            { /* Facebook tags */ }
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name='og:keywords' content={keywords} />
            <meta property="og:site_name" content={siteName} />
            { /* End Facebook tags */ }
            { /* Twitter tags */ }
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            { /* End Twitter tags */ }
        </Helmet>
    )
}