import React, { useState } from 'react';
import { Button } from 'ui';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { HiMinus, HiPlus } from 'react-icons/hi2';

const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().min(0, 'Price must be positive'),
  quantity: z.number().min(0, 'Quantity must be positive'),
  discount: z.number().min(0).max(100, 'Discount must be between 0 and 100'),
  inStock: z.boolean(),
  mainImage: z.string().url('Must be a valid URL'),
});

export type ProductFormData = z.infer<typeof productSchema>;

interface ProductFormProps {
  initialData?: Partial<ProductFormData>;
  onSubmit: (data: ProductFormData) => void;
  isLoading?: boolean;
}

const ProductForm: React.FC<ProductFormProps> = ({
  initialData,
  onSubmit,
  isLoading = false,
}) => {
  const [images, setImages] = useState<string[]>(initialData?.mainImage ? [initialData.mainImage] : []);
  const [newImages, setNewImages] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: initialData?.name || '',
      description: initialData?.description || '',
      price: initialData?.price || 0,
      quantity: initialData?.quantity || 0,
      discount: initialData?.discount || 0,
      inStock: initialData?.inStock || true,
      mainImage: initialData?.mainImage || '',
    },
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setNewImages((prevImages) => [...prevImages, ...filesArray]);
    }
  };

  const removeImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const removeNewImage = (index: number) => {
    setNewImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="space-y-2">
        <label className="text-sm font-medium">Product Name</label>
        <input
          type="text"
          className="input w-full"
          {...register('name')}
          placeholder="Enter product name"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Description</label>
        <textarea
          {...register('description')}
          rows={4}
          className="textarea w-full"
          placeholder="Enter product description"
        />
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Price (USh)</label>
          <input
            type="number"
            className="input w-full"
            {...register('price', { valueAsNumber: true })}
            placeholder="0"
          />
          {errors.price && (
            <p className="text-sm text-red-500">{errors.price.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Discount (%)</label>
          <input
            type="number"
            className="input w-full"
            {...register('discount', { valueAsNumber: true })}
            placeholder="0"
          />
          {errors.discount && (
            <p className="text-sm text-red-500">{errors.discount.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Quantity</label>
          <input
            type="number"
            className="input w-full"
            {...register('quantity', { valueAsNumber: true })}
            placeholder="0"
          />
          {errors.quantity && (
            <p className="text-sm text-red-500">{errors.quantity.message}</p>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            className="toggle" 
            {...register('inStock')}
          />
          <label className="text-sm font-medium">In Stock</label>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Product Images</label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image}
                alt={`Product image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <Button
                variant="danger"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => removeImage(index)}
              >
                <HiMinus className="h-4 w-4" />
              </Button>
            </div>
          ))}
          {newImages.map((image, index) => (
            <div key={`new-${index}`} className="relative group">
              <img
                src={URL.createObjectURL(image)}
                alt={`New product image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <Button
                variant="danger"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => removeNewImage(index)}
              >
                <HiMinus className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <label className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors">
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <div className="flex flex-col items-center p-4">
              <HiPlus className="h-8 w-8 text-gray-400" />
              <span className="mt-2 text-sm text-gray-500">Add Images</span>
            </div>
          </label>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline" type="button" onClick={() => window.history.back()}>
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
};

export default ProductForm; 