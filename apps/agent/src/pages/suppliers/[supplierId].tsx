import { useRouter } from 'next/router';
import { useFetchSupplierByPK } from '@/hooks/suppliers';

export default function SupplierPage () {
    const router = useRouter();
    const { supplierId } = router.query;
    const { data: supplier, error, loading } = useFetchSupplierByPK(supplierId as string);
    console.log(supplier);
    if(error) {
        return <p>Failed</p>
    }
    return (
        <div>
            <h1 className="text-2xl">{supplier.name}</h1>
        </div>
    )
}