import React, { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Mission = () => {
    let [categories] = useState({
        "Take action": [
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam sed architecto optio expedita quaerat debitis neque incidunt, at qui reiciendis recusandae ut dolorum esse quas in, quos et accusantium dolor."
        ],
        "Change the game": [
          "gwarn Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam sed architecto optio expedita quaerat debitis neque incidunt, at qui reiciendis recusandae ut dolorum esse quas in, quos et accusantium dolor."
        ],
        "Make an impact": [
          "tusk Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam sed architecto optio expedita quaerat debitis neque incidunt, at qui reiciendis recusandae ut dolorum esse quas in, quos et accusantium dolor."
        ],
        "Set new standards": [
            "sifu Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam sed architecto optio expedita quaerat debitis neque incidunt, at qui reiciendis recusandae ut dolorum esse quas in, quos et accusantium dolor."
        ],
    })

  return (
    <>
        <section className='bg-sand-green py-12'>
            <h1 className="mx-auto text-center uppercase text-5xl sm:text-8xl text-primary-green font-semibold">our <br /> mission</h1>
            <div className="flex justify-center">
                <div className="w-full max-w-4xl px-2 py-16 sm:px-0">
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 border-b border-opacity-30 border-primary-green">
                            {Object.keys(categories).map((category) => (
                                <Tab
                                    key={category}
                                    className={({ selected }) =>
                                        classNames(
                                            'w-full py-2.5 text-md font-medium leading-5 text-primary-green',
                                            'focus:outline-none',
                                            selected
                                                ? 'border-b border-primary-green'
                                                : 'text-opacity-30 hover:bg-white/[0.12] hover:text-white'
                                        )
                                    }
                                >
                                {category}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            {Object.values(categories).map((post, idx) => (
                                <Tab.Panel
                                    key={idx}
                                    className={classNames(
                                        'px-10 py-6 text-xl font-medium text-primary-green text-center'
                                    )}
                                >
                                    {post}
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </section>
    </>
  )
}

export default Mission