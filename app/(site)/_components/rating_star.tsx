import { JSX, SVGProps } from "react"

export default function Rating({
    rating
}:{
    rating: number
}) {

    const FilledStar=()=>{
        const stars = [];
        for (let step = 0; step < rating; step++) {
            stars.push(<StarIcon key={step} className="w-4 h-4 fill-black" />);
        }
        return stars;
    }

    const UnFilledStar=()=>{
        const stars = [];
        for (let step = 0; step < 5-rating; step++) {
            stars.push(<StarIcon key={step} className="w-4 h-4 fill-muted stroke-muted-foreground" />);
        }
        return stars;
    }

    return (
      <div className="flex items-center gap-1">
        <FilledStar/>
        <UnFilledStar/>
      </div>
    )
  }
  
  function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }