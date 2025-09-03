interface IProps {
  message: string;
}

export function EmptyStatePage({ message }: IProps) {
  return (
    <div className="col-span-full h-[50vh] flex justify-center items-center">
      <p className="text-lg text-gray-500 font-medium">{message}</p>
    </div>
  );
}
