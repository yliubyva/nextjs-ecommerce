import Image from "next/image";

type Props = {
  rating: number;
  showNum: boolean;
};

export const Stars: React.FC<Props> = ({ rating, showNum }) => {
  if (rating > 5) {
    rating = 5;
  }

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-[11px]">
      <div className="flex h-[16px] gap-[4px] md:h-[18px]">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Image
            key={`full-${i}`}
            src="/icons/star-icon.svg"
            alt="star icon"
            width={16}
            height={16}
            className="xl:h-[18px] xl:w-[18px]"
          />
        ))}
        {hasHalfStar && (
          <Image
            key="half"
            src="/icons/half-star-icon.svg"
            alt="star icon"
            width={8}
            height={16}
            className="md:h-[18px] md:w-[9px]"
          />
        )}
      </div>
      {showNum && (
        <p>
          {rating}/<span className="text-gray-500">5</span>
        </p>
      )}
    </div>
  );
};
