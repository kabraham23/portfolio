import { ContentfulClient } from 'react-contentful';

export const contentfulClient = new ContentfulClient({
    accessToken: process.env.REACT_APP_API_TOKEN,
    space: process.env.REACT_APP_SPACE_ID
});

export const getContentfulNav = async () => {
    const data = await contentfulClient.getEntry('44M3GHs0sCeAupstdcc9Wh');
    return data;
}

export const getContentfulHomepage = async () => {
    const data = await contentfulClient.getEntry( {entryId: '6DlrCwRkd1BlNP8uA0cY7K', include: 3} );
    return data;
}