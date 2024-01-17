import React from 'react'
import blogOne from '../assets/blog-one.png'
import blogTwo from '../assets/blog-two.png'

const Update = () => {
    return (
        <section className='bg-sand-green pb-16 sm:pb-32 pt-3'>
            <div className='mb-3'>
                <h1 className='font-semibold text-5xl sm:text-[8em] text-primary-green text-left uppercase leading-none py-12 pl-4 sm:p-14'>latest <br /> updates</h1>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mx-3 sm:mx-5">
                <div className='text-primary-green space-y-4'>
                    <div className='zoom-effect'>
                        <img src={blogOne} className='' alt="" />
                    </div>
                    <div className="inline-flex items-center divide-x divide-primary-green text-xs sm:text-sm font-medium">
                        <span className='pr-3 sm:pr-5 '>DECEMBER 20, 2023</span>
                        <span className='px-3 sm:px-5 '>IN THE NEWS</span>
                        <span className='pl-3 sm:pl-5 '>3 MIN READ</span>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Enko Featured in World Farmers Organisation "The Future of Food" Series</h1>
                    </div>
                    <div>
                        <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore corporis, quod obcaecati fuga expedita cupiditate quos repudiandae consectetur et ullam aspernatur esse id vel voluptas ipsam amet perspiciatis nostrum. Minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum optio neque minus numquam eveniet cupiditate placeat deserunt libero enim, vel, distinctio sint in exercitationem vitae ipsum quo sapiente provident. Dolores.</p>
                    </div>

                </div>

                <div className='text-primary-green space-y-4'>
                    <div className='zoom-effect'>
                        <img src={blogTwo} className='' alt="" />
                    </div>
                    <div className="inline-flex items-center divide-x divide-primary-green text-xs sm:text-sm font-medium">
                        <span className='pr-3 sm:pr-5 '>DECEMBER 20, 2023</span>
                        <span className='px-3 sm:px-5 '>IN THE NEWS</span>
                        <span className='pl-3 sm:pl-5 '>3 MIN READ</span>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Enko Featured in World Farmers Organisation "The Future of Food" Series</h1>
                    </div>
                    <div>
                        <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore corporis, quod obcaecati fuga expedita cupiditate quos repudiandae consectetur et ullam aspernatur esse id vel voluptas ipsam amet perspiciatis nostrum. Minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum optio neque minus numquam eveniet cupiditate placeat deserunt libero enim, vel, distinctio sint in exercitationem vitae ipsum quo sapiente provident. Dolores.</p>
                    </div>

                </div>
                
            </div>
        </section>
    )
}

export default Update