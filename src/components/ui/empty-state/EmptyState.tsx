interface IProps {
  message: string;
}

export function EmptyState({ message }: IProps) {
  return (
    <p className="text-gray-500 text-center font-medium w-full">{message}</p>
  );
}
