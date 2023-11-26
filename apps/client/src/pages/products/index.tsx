import { ProductsCatalogue } from '@/Products/ProductsCatalogue';

export default function Products() {
  return (
    <section className='space-y-2'>
      <div className='flex justify-between items-center'>
        <h3 className='text-2xl'>Available Products</h3>
      </div>
      <ProductsCatalogue />
    </section>
  );
}
