const PricingCard = () => {
  return (
    <div className="border-2 border-primary rounded-md relative px-4 py-2">
      {/* Top Badge */}
      <span className="absolute -top-3 right-4 bg-primary text-white text-xs px-3 py-1 rounded-md">
        7-day free trial
      </span>

      {/* Bottom Badge */}
      <span className="absolute bottom-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-tl-md rounded-br-xs">
        -15%
      </span>

      {/* Content */}
      <div className="flex flex-col gap-[1px] sm:gap-0.5">
        <h2 className="text-primary font-bold text-lg sm:text-xl tracking-wider">
          YEARLY
        </h2>
        <p className="text-gray-700 font-semibold">40% Off Special Offer</p>
        <p className="text-gray-900 text-xl sm:text-2xl font-bold">
          $70.99{" "}
          <span className="text-base font-normal text-secondary">/ year</span>
        </p>
        <p className="text-secondary text-sm line-through">($119.99)</p>
      </div>
    </div>
  );
};

export default PricingCard;
