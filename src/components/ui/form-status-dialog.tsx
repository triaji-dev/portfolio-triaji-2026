import Image from 'next/image';
import React from 'react';

import { generateClamp } from '@/functions/generate-clamp';

import { Button } from './button';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './dialog';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';
}

const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent className='bg-base-white flex items-center justify-center rounded-xl p-6 md:rounded-2xl md:p-8'>
        <DialogBody className='flex flex-col items-center gap-5 md:gap-6'>
          <Image
            src={
              variant === 'success'
                ? '/icons/message-sent-success.svg'
                : '/icons/message-sent-failed.svg'
            }
            alt={
              variant === 'success'
                ? 'message-sent-success'
                : 'message-sent-failed'
            }
            width={58}
            height={47.5}
            className='w-auto'
            style={{ height: generateClamp(140, 190, 1232) }}
          />
          <DialogTitle className='md:text-xl-semibold text-md-semibold text-neutral-950'>
            {variant === 'success'
              ? 'Message Sent Successfully!'
              : 'Failed to send'}
          </DialogTitle>
          <DialogDescription className='md:text-md-regular text-sm-regular text-center text-neutral-500'>
            {variant === 'success'
              ? 'Thank you for reaching out. I’ll get back to you as soon as possible'
              : 'Please check your internet connection or try refreshing the page.'}
          </DialogDescription>
          <DialogClose asChild>
            <Button variant='secondary' className='w-full md:max-w-77.5'>
              {variant === 'success' ? 'Back to Home' : 'Try Again'}
            </Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;
