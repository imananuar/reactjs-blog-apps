import useFetch from '../useFetch';
import BlogList from './BlogList';


function Home() {

    const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");
    // data: blogs. Pass in data, but call it as blogs.

  return (
    <div className='home'>
        { error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        {/* blogs={blogs}. Blogs kiri tu yang menyebabkan props.blogs berfungsi */}
        {/* {blogs} tu import data dari state blogs */}

        {/* blogs && <div> */}
        {/* If blogs is null, dont render div. Kalau not null, then render div */}


    </div> 
  )
}

export default Home