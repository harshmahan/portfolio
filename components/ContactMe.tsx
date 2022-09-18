import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => { window.location.href = `mailto:sigmaharsh66@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})` };
  return (

    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">Contact Me</h3>
        <div className="flex flex-col space-y-8 mt-28">
            <h4 className="text-xl md:text-2xl xl:text-3xl overflow-hidden font-semibold text-center">
               I have got just what you need.{" "}
               <span className="underline decoration-[#F7AB0A]/50">Lets Talk.</span> 
            </h4>
            <div className="space-y-4">
                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[#F7AB0A]/50 h-7 w-7 animate-pulse" />
                    <p className="text-xl">+91-7355780849</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#F7AB0A]/50 h-7 w-7 animate-pulse" />
                    <p className="text-xl">mahanharsh66@gmail.com</p>
                </div>
                
                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[#F7AB0A]/50 h-7 w-7 animate-pulse" />
                    <p className="text-xl">Alpha-1 Greater Noida</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-[90%] md:w-fit lg:w-fit xl:w-fit mx-auto">
                <div className="flex space-x-2">
                    <input {...register('name')} placeholder="Name" className="userInput" type="text" />
                    <input {...register('email')} placeholder="Email" className="userInput" type="Email" />
                </div>
                <input {...register('subject')} placeholder="Subject" className="userInput" type="text" />
                <textarea {...register('message')} placeholder="Message" className="userInput" />
                <button className="bg-[#F7AB0A] hover:bg-[#F7AB0A]/80 py-5 px-10 rounded-md text-black font-bold text-lg" type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe