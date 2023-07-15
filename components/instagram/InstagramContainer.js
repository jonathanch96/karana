import Instagram from 'instagram-web-api';
import { useEffect, useState } from 'react';

const InstagramContainer = ({ posts }) => {

  return (
    ""
  );
};

export async function getStaticProps(context) {
  console.log('getStaticProps executed'); // Add this line
  const client = new Instagram({ username: process.env.INSTAGRAM_USERNAME, password: process.env.INSTAGRAM_PASSWORD });
  await client.login();

  const response = await client.getPhotosByUsername({
    username: process.env.INSTAGRAM_USERNAME_TARGET,
  });
  console.log(response)

  return {
    props: {
      posts: response.user.edge_owner_to_timeline_media.edges,
    },
  };
}
export default InstagramContainer;
