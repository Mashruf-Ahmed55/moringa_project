import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { Control, useForm } from 'react-hook-form';
import { LuCircleArrowOutUpRight } from 'react-icons/lu';
import { Link } from 'react-router';
import z from 'zod';
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  comment: z
    .string()
    .min(5, { message: 'Comment must be at least 5 characters' }),
});

type FormValues = z.infer<typeof formSchema>;
export default function ContactUsPage() {
  const [isLoading, setIsloading] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      comment: '',
    },
  });
  const onSubmit = (data: FormValues) => {
    console.log('Form data submitted:', data);
    form.reset();
  };
  return (
    <section className="w-full pt-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-10 text-center">Contact Us</h1>
        <div className="md:min-w-2xl w-full max-w-2xl pb-16 px-4 md:px-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CustomInput
                  type="input"
                  control={form.control}
                  name="name"
                  placeHolder="Name"
                  label="Name"
                />
                <CustomInput
                  type="email"
                  control={form.control}
                  name="email"
                  placeHolder="Email"
                  label="Email"
                />
              </div>

              <CustomInput
                type="phone"
                control={form.control}
                name="phone"
                placeHolder="Phone"
                label="Phone"
              />
              <CustomInput
                type="textarea"
                control={form.control}
                name="comment"
                placeHolder="Comment"
                label="Comment"
              />

              <Button
                type="submit"
                className="bg-black hover:bg-black/90 text-white rounded-sm"
                disabled={!form.formState.isValid || isLoading}
                size={'lg'}
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <span className="flex items-center gap-2">
                    Send <LuCircleArrowOutUpRight />
                  </span>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="w-full py-12 bg-gray-100">
        <div className="md:max-w-4xl w-full mx-auto py-12 bg-red-100/50 rounded-2xl flex items-center flex-col gap-y-5 px-4 md:px-0">
          <img src={'/refundLogo.png'} alt="" width={120} height={120} />
          <h1 className="text-2xl md:text-4xl font-semibold">
            Learn more about Refund Policy
          </h1>
          <Link to={'/refund-policy'}>
            <Button size={'lg'} className="rounded-sm cursor-pointer">
              Refund Policy
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

interface customInpuntProps {
  control: Control<FormValues>;
  name: keyof FormValues;
  placeHolder: string;
  label: string;
  type?: string;
}

export const CustomInput = ({
  control,
  name,
  placeHolder,
  label,
  type,
}: customInpuntProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Label htmlFor={name} className="sr-only">
            {label}
          </Label>
          <FormControl>
            {type !== 'textarea' ? (
              <Input
                {...field}
                id={name}
                type={type}
                placeholder={placeHolder}
                className="h-12 border-neutral-300 rounded-sm"
              />
            ) : (
              <Textarea
                {...field}
                id={name}
                placeholder={placeHolder}
                rows={5}
                className="border-neutral-300 rounded-sm resize-none"
              />
            )}
          </FormControl>
          <FormMessage className="text-xs mt-1" />
        </FormItem>
      )}
    />
  );
};
