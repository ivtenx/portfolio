import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mrblrgpy");
    if (state.succeeded) {
        return <p className='py-1 text-gray-400 flex justify-center'>Thanks! You are &gt;&gt;anyone🩶</p>;
    }
    return (
        <div>
            <div className="text-gray-300 mt-4 flex justify-center text-2xl font-cdi border-b-2 mx-40 2xl:mx-[47vw] mb-6 ">Contact</div>
            <div className='2xl:flex 2xl:justify-center'>  <form className=' text-gray-300 mx-3 my-4 rounded-lg 2xl:w-[38vw]  ' onSubmit={handleSubmit}>
                < label htmlFor="email" >

                </label >
                <div className='backdrop-blur-md'>
                    <input
                        className='border rounded-tl-lg rounded-tr-lg min-w-full border-gray-500 py-2 '
                        id="email"
                        type="email"
                        name="email"
                        placeholder='Email '
                        required

                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        id="message"
                        name="message"
                        placeholder='Any message'
                        className='border border-gray-600 min-w-full py-6'
                    />
                </div>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />

                <div className='2xl:flex 2xl:justify-center'><button type="submit" className='bg-purple-800 px-1 border border-gray-500 mt-0.5 2xl:p-0.5 2xl:text-xl  rounded-lg hover:scale-105 duration-300 hover:text-white' disabled={state.submitting}>
                    SEND</button></div>
            </form ></div>
        </div>
    );
}
export default ContactForm