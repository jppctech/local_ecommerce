import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
    return ( 
        <div className="flex space-y-4 p-4 flex-col">
            <Skeleton className="w-72 h-72"/>
            <Skeleton className="w-72 h-10"/>
            <Skeleton className="w-72 h-10"/>
            <Skeleton className="w-72 h-16"/>
        </div>
     );
}
 
export default ProductCardSkeleton;