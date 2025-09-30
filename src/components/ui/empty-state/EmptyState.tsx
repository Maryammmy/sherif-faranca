interface IProps {
  message: string;
}

export function EmptyState({ message }: IProps) {
  return (
    <p className="text-secondary text-center font-medium w-full">{message}</p>
  );
}
