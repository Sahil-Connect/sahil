import { z } from 'zod';
import { useRef } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Modal from 'ui/components/Modal';
import { Input, Select } from 'ui';
import { Orders } from '@sahil/lib/graphql/__generated__/graphql';
import { allStatuses } from './constants';

const status = z.enum(allStatuses);

const statusSchema = z.object({
  status: status,
  note: z.string().min(10, 'Note must be at least 10 characters.'),
  created_at: z.string(),
});

type FormData = z.infer<typeof statusSchema>;

type Props = {
  order: Orders;
};

export const UpdateOrderStatusModal = ({ order }: Props) => {
  const id = `update-${order.id}-status`;
  const closeBtn = useRef<HTMLButtonElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(statusSchema),
    defaultValues: {
      created_at: new Date().toISOString(),
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <Modal
      id={id}
      CloseBtnRef={closeBtn}
      btnSize='sm'
      btnStyle='primary'
      CTA='Update Status'
      title='Append New Status'
    >
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div className='my-4 space-y-2'>
          <Select
            name='status'
            label='New Status'
            register={register}
            errors={errors}
            options={status.options}
          />
          <Input name='note' label='Note' register={register} errors={errors} />
        </div>

        <button type='submit' className='btn btn-primary w-full'>
          Submit
        </button>
      </form>
    </Modal>
  );
};
