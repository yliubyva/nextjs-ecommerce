import { SortType } from "@/features/products/utils/product-sorts";

type Props = {
  selectedOption: SortType;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const SelectOptions: React.FC<Props> = ({
  selectedOption,
  onChange,
}) => {
  return (
    <label className="hidden text-primary md:block">
      Sort by:
      <select
        name="sort"
        onChange={onChange}
        className="cursor-pointer font-normal text-black"
        defaultValue={selectedOption}
      >
        <option value="none">Choose an option</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="rating-desc">Most Popular</option>
        <option value="newest">Newest</option>
      </select>
    </label>
  );
};
