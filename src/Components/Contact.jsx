import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import { cn } from '../lib/utils';
import { toast } from 'sonner';
import React, { useState } from 'react';

export const Contact = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = (e) => {

        e.preventDefault();

        setIsSubmitting(true);
        setTimeout(() => {
            toast("Message Sent!", {
            description: "Thank you for reaching out! I'll get back to you soon.",
        });

            setIsSubmitting(false);

        }, 1500);

    }

    return (
        <section className="py-24 px-4 relative bg-secondary" id="contact">
            <div className="container mx-auto max-w-5xl">

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                          
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Mail className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Email</h4>
                                    <a href="mailto:fredlloyddeguzman9@gmail.com" className='text-muted-foreground hover:text-primary transition-colors' >fredlloyddeguzman9@gmail.com</a>
                                </div>
                            </div>

                              <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <Phone className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Phone</h4>
                                    <a href="tel:+6390063489" className='text-muted-foreground hover:text-primary transition-colors' >+63963-00-63489</a>
                                </div>
                            </div>

                              <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Location</h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors' >Calamba Laguna, Philippines</a>
                                </div>
                            </div>
                        </div>

                        <div className='pt-8'>
                            <h4 className='font-medium mb-4' >
                                Connect With Me
                            </h4>
                            <div className='flex space-x-4 justify-center'>
                                <a href="https://www.facebook.com/fredlloyddg" target='_blank'>
                                    <Facebook />
                                </a>
                                <a href="https://www.instagram.com/fredlloyddg/" target='_blank'>
                                    <Instagram/>
                                </a>
                                <a href="https://www.linkedin.com/in/fred-lloyd-de-guzman-104b39252/" target='_blank'>
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='bg-card rounded-lg shadow-xs p-8' >
                        <h3 className='text-2xl font-semibold mb-6'>
                            Send a Message
                        </h3>

                        <form className='space-y-6' onSubmit={handleSubmit}>    
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                                <input type="text" id='name' name="name" required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus-ring-2 foucs-ring-primary' placeholder='John Doe....' />
                            </div>

                             <div>
                                <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
                                <input type="email" id='email' name="email" required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus-ring-2 foucs-ring-primary' placeholder='johndoe@email.com.... ' />
                            </div>

                             <div>
                                <label htmlFor="message" className='block text-sm font-medium mb-2'>Your Message</label>
                                <textarea id='message' name="message" required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus-ring-2 foucs-ring-primary resize-none' placeholder="Hello, I'd like to talk about...." />
                            </div>

                            <button type='submit' disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2 cursor-pointer",

                            )}>
                               {isSubmitting ? "Sending..." : "Send a Message"}
                                <Send size={16} />
                            </button>
                        </form> 
                        
                    </div>

            </div>


            </div>
        </section>
    )
}