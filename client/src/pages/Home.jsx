import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import Banner from '../components/Banner';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-3xl font-extrabold lg:text-6xl'>Welcome to Thirteen Blog</h1>
        <p className='text-gray-500 text-md sm:text-sm'>
          Welcome to our blog website, where you can find a diverse range of content covering sports, politics, business, and aid-related topics. From the latest developments in sports to the pulse of politics, innovations in the business world, and discussions on aid and support issues, we offer comprehensive information and analysis to cater to everyone's interests.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
        <br /><br />
      <Banner />
      </div>


      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-8 items-center'>
            <h2 className='text-2xl font-extrabold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-6 justify-around items-center'>
              {posts.slice(0, 6).map((post) => ( 
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center font-bold'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
