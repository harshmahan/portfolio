/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-8 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-x-hidden max-h-[36rem] overflow-y-scroll scrollbar-hide">
        <motion.img
         initial={{
            y: -100,
            opacity: 0
         }}
         transition = {{
            duration: 1.2
         }}
         whileInView={{
            opacity: 1,
            y: 0
         }}
         viewport={{
            once: true
         }}
        className="w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] xl:-mb-6 xl:-mt-5 object-cover object-center"
        src={urlFor(experience?.companyImage).url()}  alt="" />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
            <p className="font-bold text-xl md:text-2xl xl:text-2xl mt-[0.15rem]">{experience.company }</p>
            <div className="flex space-x-2 my-1">
              {experience.technologies.map((technology) => (
                <img key={technology._id} 
                src={urlFor(technology.image).url()} 
                className="h-10 w-10 rounded-full"
                />
              ))}
            </div>
            <p className="uppercase py-5 text-sm md:text-base xl:-mt-3 lg:text-base text-gray-300">
              {new Date(experience.dateStarted).toDateString()} -{" "}
              {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
            </p>
            <ul className="list-disc space-y-4 ml-5 text-sm md:text-base xl:text-base h-28 overflow-y-scroll scrollbar-hide">
              {experience.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard