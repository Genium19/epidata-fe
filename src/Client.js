import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "0c0gybjf", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: '2022-08-12',
  useCdn: true
});