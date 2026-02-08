'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import FormStatusDialog from '@/components/ui/form-status-dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { generateClamp } from '@/functions/generate-clamp';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(2, 'Name must be at least 2 characters long')
    .max(20, 'Name must be at most 20 characters long'),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email address'),
  message: z
    .string({ required_error: 'Message is required' })
    .min(20, 'Message must be at least 20 characters long')
    .max(500, 'Message must be at most 500 characters long'),
});

export const ContactForm = () => {
  return (
    <div className='relative'>
      <Image
        src='/images/pattern-bot.png'
        alt='floor'
        width={1920}
        height={1080}
        className='absolute bottom-0 left-0 -z-10 h-auto w-full'
      />
      <div id='contact' className='custom-container mt-20 w-auto'>
        <ContactCards>
          <WaitingForYouCard className='flex-[3.8] basis-80' />
          <SendMessageCard
            title='Send Message'
            className='mb-16.5 flex-[6.2] basis-100 md:my-20'
          />
        </ContactCards>
      </div>
    </div>
  );
};

type ContactCardsProps = {
  children: React.ReactNode;
};

const ContactCards: React.FC<ContactCardsProps> = ({ children }) => {
  return (
    <div
      className='flex flex-wrap items-center gap-6 md:gap-48.5'
      style={{ gap: generateClamp(24, 194, 1232) }}
    >
      {children}
    </div>
  );
};

type WaitingForYouCardProps = {
  className: string;
};

const WaitingForYouCard: React.FC<WaitingForYouCardProps> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      <div className='md:mb-10'>
        <h3 className='md:display-2xl-bold display-md-bold mb-5.5 text-neutral-950'>
          I&apos;ve been waiting for you.
        </h3>
        <h4 className='md:text-lg-medium text-md-medium text-neutral-950'>
          Fill in the form or Send us an email
        </h4>
      </div>

      <div className='mt-6 flex items-center gap-1.25 md:gap-4'>
        <div className='bg-primary-100 h-10 w-10 rounded-full p-3 md:h-12 md:w-12'>
          <Image
            src='/icons/phone-purple.svg'
            alt='faq'
            width={24}
            height={24}
            className='w-auto'
          />
        </div>
        <span className='md:text-lg-regular text-md-regular text-neutral-950'>
          +62 1234567890
        </span>
      </div>
      <div className='my-6 md:my-8'>
        <div className='flex items-center gap-1.25 md:gap-4'>
          <div className='bg-primary-100 h-10 w-10 rounded-full p-3 md:h-12 md:w-12'>
            <Image
              src='/icons/mail-purple.svg'
              alt='faq'
              width={24}
              height={24}
              className='w-auto'
            />
          </div>
          <span className='md:text-lg-regular text-md-regular text-neutral-950'>
            aji.prabandaru@gmail.com
          </span>
        </div>
      </div>
      <div>
        <div className='flex items-center gap-1.25 md:gap-4'>
          <div className='bg-primary-100 h-10 w-10 rounded-full p-3 md:h-12 md:w-12'>
            <Image
              src='/icons/location.svg'
              alt='faq'
              width={24}
              height={24}
              className='w-auto'
            />
          </div>
          <span className='md:text-lg-regular text-md-regular text-neutral-950'>
            Jakarta, Indonesia
          </span>
        </div>
      </div>
    </div>
  );
};

type SendMessageCardProps = {
  title: string;
  className?: string;
};

const SendMessageCard: React.FC<SendMessageCardProps> = ({
  title,
  className,
}) => {
  const [loading, setLoading] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(false);
  const [variant, setVariant] = React.useState<'success' | 'error'>('success');

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  });
  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      setLoading(true);

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      form.reset(
        { name: '', email: '', message: '' },
        { keepDefaultValues: false, keepIsSubmitted: false }
      );
      setVariant('success');
    } catch (error) {
      console.error('Error sending email:', error);
      setVariant('error');
    } finally {
      setShowDialog(true);
      setLoading(false);
    }
  }

  return (
    <div
      className={cn(
        'bg-base-white rounded-xl p-4 shadow-[0_0_25px_rgba(102,0,235,0.08)] md:rounded-2xl md:p-8',
        className
      )}
    >
      <h3 className='md:display-xs-semibold text-lg-semibold mb-5.5 text-neutral-950'>
        {title}
      </h3>
      <Form {...form}>
        <form
          className='mb-4 space-y-4 md:mb-6'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Input Your Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Input Your Email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder='Input Your Message' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant='secondary'
            disabled={loading}
            type='submit'
            className='w-full'
          >
            {loading ? (
              'Sending...'
            ) : (
              <>
                <Image
                  src='/icons/plane-submit.svg'
                  alt='mail-logo'
                  width={20}
                  height={20}
                  className='mr-2.5'
                />
                Submit
              </>
            )}
          </Button>
        </form>
      </Form>
      <FormStatusDialog
        variant={variant}
        open={showDialog}
        onOpenChange={setShowDialog}
      />
    </div>
  );
};
