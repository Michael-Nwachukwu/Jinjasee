import React from 'react'
import blogOne from '../assets/blog-one.png'
import blogTwo from '../assets/blog-two.png'
import Heading from '../micros/Heading'
import { Link } from 'react-router-dom'
import Blog from '../content/Blog'

const Update = () => {
    return (
        <section className='bg-sand-green pb-16 sm:pb-32 pt-3'>
            <div className='mb-3 py-12 pl-4 sm:py-14'>
                <Heading heading={'latest\nUpdates'} />
            </div>
            <div className="grid sm:grid-cols-2 gap-8 sm:gap-5 mx-3 sm:mx-5">

                {Blog.map((article) => {
                    return (
                        <Link to={`/blog/post/${article.id}`} key={article.id}>
                            <div className='text-primary-green space-y-4'>
                                <div className='zoom-effect'>
                                    <img src={article.image} className='w-full h-[35em] object-cover' alt={article.alt} />
                                </div>
                                <div className="inline-flex items-center divide-x divide-primary-green text-xs lg:text-sm font-medium">
                                    <span className='pr-3 sm:pr-5 '>{article.date}</span>
                                    <span className='px-3 sm:px-5 '>IN THE NEWS</span>
                                    <span className='pl-3 sm:pl-5 '>3 MIN READ</span>
                                </div>
                                <div>
                                    <h1 className='text-xl font-semibold'>{article.heading}</h1>
                                </div>
                                <div>
                                    <p className='text-sm'>{article.summary}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })}
                
            </div>
        </section>
    )
}

export default Update