import React from 'react';
import { useRouter } from 'next/router';
import { Card } from 'ui';
import ProductForm, { ProductFormData } from '@sahil/features/Inventory/ProductForm';
import { useMutation } from '@apollo/client';
import { CREATE_PRODUCT } from '@sahil/lib/graphql/mutations/products';
import { HiShieldCheck, HiFlag } from 'react-icons/hi2';

const NewProductPage = () => {
  const router = useRouter();
  const [createProduct, { loading }] = useMutation(CREATE_PRODUCT);

  const handleSubmit = async (data: ProductFormData) => {
    try {
      const result = await createProduct({
        variables: {
          input: data,
        },
      });
      
      if (result.data?.insert_products_one) {
        router.push('/inventory');
      }
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full xl:basis-2/3">
          <Card className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold">Add New Product</h1>
              <p className="text-sm text-gray-500">Create a new product listing</p>
            </div>
            <ProductForm 
              onSubmit={handleSubmit} 
              isLoading={loading}
            />
          </Card>
        </div>

        <div className="w-full xl:basis-1/3 space-y-4">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <HiShieldCheck className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold">Product Guidelines</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Use high-quality images for better visibility</li>
                <li>• Provide accurate and detailed descriptions</li>
                <li>• Keep pricing information up to date</li>
                <li>• Regularly update stock availability</li>
                <li>• Include all relevant product specifications</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <HiFlag className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold">Need Help?</h2>
              </div>
              <p className="text-gray-600">
                If you&apos;re having trouble adding a new product or have any questions,
                our support team is here to help.
              </p>
              <button 
                onClick={() => window.location.href = 'mailto:support@example.com'}
                className="text-primary hover:underline text-sm"
              >
                Contact Support
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewProductPage; 