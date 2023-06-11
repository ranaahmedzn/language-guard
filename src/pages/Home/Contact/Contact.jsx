import { useForm } from "react-hook-form";
import Container from "../../../components/Container/Container";
import Swal from "sweetalert2";
import useThemeContext from "../../../hooks/useThemeContext";

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const contactInfo = data;
        console.log(contactInfo)

        setTimeout(() => {
            reset()
            Swal.fire(
                'Message sent!',
                'We will contact you soon. Thanks for your message😊',
                'success'
            )
        }, 700)
    };

    const { theme } = useThemeContext()

    return (
        <section id="contact" className={`py-16 ${theme === 'light' && "bg-[#122033]"}`}>
            <Container>
                <div className="max-w-lg mx-auto text-white">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-white sm:text-4xl dark:text-gray-800">
                            Contact us
                        </h1>
                        <span className="inline-block h-[5px] w-10 rounded-full bg-[#FEBC1E] my-4"></span>

                    </div>
                </div>

                <div className="bg-gray-900 rounded-lg mt-6 max-w-lg mx-auto">
                    <div className="flex flex-col p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-4 lg:gap-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-white mb-1">First Name</label>
                                        <input type="text" {...register("firstName")} name="firstName" id="firstName" className="py-3 px-4 block w-full rounded-md text-sm focus:ring-[#FEBC1E] focus:border-0 bg-gray-700 text-gray-300" />
                                    </div>

                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-white mb-1">Last Name</label>
                                        <input type="text" {...register("lastName")} name="lastName" id="lastName" className="py-3 px-4 block w-full rounded-md text-sm focus:ring-[#FEBC1E] focus:border-0 bg-gray-700 text-gray-300" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                                        <input type="email" {...register("email")} name="email" id="email" className="py-3 px-4 block w-full rounded-md text-sm focus:ring-[#FEBC1E] focus:border-0 bg-gray-700 text-gray-300" />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">Phone Number</label>
                                        <input type="text" {...register("phone")} name="phone" id="phone" className="py-3 px-4 block w-full rounded-md text-sm focus:ring-[#FEBC1E] focus:border-0 bg-gray-700 text-gray-300" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
                                    <textarea id="message" {...register("message")} name="message" rows="4" className="py-3 px-4 block w-full rounded-md text-sm focus:ring-[#FEBC1E] focus:border-transparent bg-gray-700 text-gray-300"></textarea>
                                </div>
                            </div>

                            <div className="mt-6 grid">
                                <button type="submit" className="primary-btn py-3">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;