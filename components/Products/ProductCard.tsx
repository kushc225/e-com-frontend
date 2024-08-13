import {Badge} from '@/components/ui/badge'
import {Card, CardContent, CardHeader} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import { CiStar } from "react-icons/ci";
import { Heart, Eye } from "lucide-react";
import Image from "next/image";

type ProductCardProps = {
  title: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  originalPrice,
  discountedPrice,
  discountPercentage,
  imageUrl,
  rating,
  reviewsCount,
}) => {
  return (
    <Card className=" cursor-pointer max-w-xs bg-white shadow-sm rounded-lg h-[20rem] w-[20rem]">
      <CardHeader className="relative p-0 h-[12rem] overflow-hidden">
        <Image src={imageUrl} alt={title} width={100} height={100} className="w-full" />
        <Badge variant="destructive" className="absolute top-2 left-2 ">
          -{discountPercentage}%
        </Badge>
        <div className="absolute top-2 right-2 flex space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Eye className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-xl font-bold text-red-600">${discountedPrice}</span>
          <span className="text-sm line-through text-gray-500">${originalPrice}</span>
        </div>
        <div className="flex items-center space-x-1 mt-3">
          <div className="flex">
           { [1, 2, 3, 4, 5].map(ele => (<CiStar key={ele + "key"} fill='#FFAD33' className='cursor-pointer'/>))}
           
          </div>
          <span className="text-sm text-gray-500">({reviewsCount})</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
