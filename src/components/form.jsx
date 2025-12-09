import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mrblrgpy");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form className='absolute text-gray-300 mx-3 my-16 rounded-lg backdrop-lg' onSubmit={handleSubmit}>
            <label htmlFor="email">

            </label>
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
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <br />
            <button type="submit" className='bg-purple-800 px-1 mt-0.5  rounded-lg hover:scale-105 duration-300 hover:text-white' disabled={state.submitting}>
                SEND</button>
        </form>
    );
}
export default ContactForm