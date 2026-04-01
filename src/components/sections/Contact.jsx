import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import z from 'zod'
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import CircleCheck from '@/assets/icons/CircleCheck.svg'
import mail from '@/assets/icons/mail.svg'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const points = ["Personalized Consultations", "Workflow assessments", "Live product demos", "Custom pricing and scaling advice"];

const formSchema = z.object({
  name: z.string().min(2, {message:'Name must be atleast 2 characters'}),
  email: z.string().email({message:'Please enter a valid email'}),
  message: z.string().min(10,{message:'Message must be atleast 10 characters'})
});

const Contact = () => {
  // Initialize the form
const form = useForm({
  resolver: zodResolver(formSchema),
  defaultValues: {name:'',email:'',message:''},
});

// Handle Submission
const [isLoading, setIsLoading] = useState(false);

const onSubmit = async(data)=>{
setIsLoading(true);
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );
    toast.success("Message sent!", {
      description: "We'll get back to you as soon as possible.",
    });
    form.reset(); // clears the form fields after success
    // show success message

  } catch (error) {
    console.error("Failed to send message:", error);
    // show error message
    toast.error("Something went wrong!", {
      description: "Please try again or email us directly.",
    });
  } finally {
    setIsLoading(false);
  }
};

  return (
        <section className='container-custom section-spacing'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:pb-14 pb-6'>
            <div className='contact-data'>
              <h1 className='text-h1 text-foreground'>Talk to Our Sales Team</h1>
              <p className='sub-text text-muted py-2'>Our experts will help you evaluate your needs, run live demos, and tailor 
                a plan that aligns with your goals.
              </p>
              <div className='py-4'>
                <ul className='no-hover'>
                    {points.map((point)=>(
                      <li key={point}><div className='inline-flex py-3 items-center gap-2 sub-text font-semibold'><img src={CircleCheck} alt="" /> {point}</div></li>
                    ))}
                </ul>
              </div>
              <p className='sub-text font-medium text-muted py-2'>Technical issues or product questions?</p>
            </div>
            <div className='lg:ml-10 lg:mr-10 p-6 bg-card border-2 border-[#242424] rounded-sm'>
              <h3 className='text-h3 pb-2 text-subtle font-semibold border-b border-[#5E5E5E]'>Tell us how we can help</h3>
              <div className='py-6'>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                      <FormField control={form.control} name="name"
                      render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Your Name" {...field} />
                        </FormControl>
                        <FormMessage className="text-yellow-500" /> {/* Automatically shows validation errors */}
                      </FormItem>
                    )}/>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage className="text-yellow-500" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How can we help?</FormLabel>
                          <FormControl>
                            <Textarea placeholder="I'm interested in Zapverse for my Company. I'd like to learn more about..." {...field} />
                          </FormControl>
                          <FormMessage className="text-yellow-500" />
                        </FormItem>
                      )}
                    />
                    <Button className='text-[#EBEBEB]' disabled={isLoading} variant='primary' type="submit">
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
          <div className='section-spacing border-t border-t-[#1F1F1F]'>
            <div className='lg:flex justify-center gap-18'>
              <div>
                <h3 className='uppercase text-2xl font-bold text-muted'>General Communication</h3>
                <p className='sub-text text-muted py-4'>For other queries, please get in touch <br /> with us via email.</p>
                <div className='inline-flex gap-2'>
                    <img src={mail} alt="mail" />
                    <p className='sub-text text-muted font-medium'>hello@Zapverse.com</p>
                </div>
              </div>
              <div>
                <h3 className='uppercase text-2xl font-bold text-muted pt-8 lg:pt-0'>White Papers</h3>
                <p className='sub-text text-muted font-medium py-4'>Stay ahead in a rapidly evolving industry <br /> with exclusive white papers </p>
                <Link className='text-muted inline-flex p-2 hover:text-white font-medium' to="/white-papers">View white papers <ChevronRight /></Link>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Contact
