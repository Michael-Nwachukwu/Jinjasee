import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import blogOne from '../assets/blog-one.png'
import Blog from '../content/Blog'

const Post = () => {

    const { id } = useParams();
    const articleDetails  = Blog.find(blog => blog.id === parseInt(id)); // Find the correct blog post

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, [id]); // Add id as a dependency to scroll to top when the id changes
    

    if (!articleDetails) {
        // Handle the case where the blog post is not found
        return <p>Blog post not found</p>;
    }

    return (
        <>
            <section className='bg-sand-green mt-12 pb-24 pt-10 sm:py-10 px-4 sm:px-8 text-primary-green '>
                <button onClick={() => window.history.back()} className="bg-primary-green text-sand-green px-4 py-2 rounded-3xl">Back</button>
                <div className="sm:max-w-5xl mx-auto">
                    <div className="w-full h-full">
                        <img src={articleDetails?.image} alt={articleDetails?.alt} className="w-full sm:h-[32em] object-cover rounded-3xl" />
                    </div>
                    <div className="mx-auto max-w-4xl py-4 sm:py-16">
                        <div className="space-y-3 sm:space-y-5 pb-14">
                            <p>{articleDetails?.date}</p>
                            <h1 className="text-2xl sm:text-5xl font-semibold">{articleDetails?.heading}</h1>
                            <p className="font-light text-md sm:text-lg pb-6">{articleDetails?.summary}</p>
                            <hr />
                        </div>
                        <div>
                            <article className='pb-14' dangerouslySetInnerHTML={{ __html: articleDetails?.body }} />
                            

                            <hr />

                            <div className='space-y-5 mt-10 font-medium'>
                                <h1 className="text-4xl ">
                                    Contacts
                                </h1>
                                <ul>
                                    <li>Syngenta Crop Protection</li>
                                    <li>Michelle Ng</li>
                                    <li>Head, External Communications</li>
                                    <li>michelle.ng@syngenta.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Post


