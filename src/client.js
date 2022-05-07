import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'yaue9457', // find this at manage.sanity.io or in your sanity.json
  dataset: 'production', // this is from those question during 'sanity init',
  apiVersion: '2022-05-07',
  useCdn: true,
});
