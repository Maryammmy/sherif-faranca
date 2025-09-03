interface IProps {
  message: string;
}

export function EmptyStateGrid({ message }: IProps) {
  return (
    <p className="col-span-full text-gray-500 text-center font-medium">
      {message}
    </p>
  );
}
