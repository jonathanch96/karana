import Home from '@/components/home/Home'
import HomepageLayout from '@/components/homepage_layout/HomepageLayout'
import InstagramContainer from '@/components/instagram/InstagramContainer'
import Instagram from 'instagram-web-api'

const HomePage = ({ posts }) => {
  return (
    <HomepageLayout>
      <Home />
      <InstagramContainer posts={posts} />
    </HomepageLayout>
  )
}

// export async function getStaticProps(context) {
//   console.log(process.env.INSTAGRAM_USERNAME)
//   console.log(process.env.INSTAGRAM_PASSWORD)
//   const client = new Instagram({ username: process.env.INSTAGRAM_USERNAME, password: process.env.INSTAGRAM_PASSWORD });
//   await client.login();

//   const response = await client.getPhotosByUsername({
//     username: process.env.INSTAGRAM_USERNAME_TARGET,
//   });
//   console.log(response)

//   return {
//     props: {
//       posts: response.user.edge_owner_to_timeline_media.edges,
//     },
//   };
// }

export default HomePage
