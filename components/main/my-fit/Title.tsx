interface IProps {
  title: string;
}
function Title({ title }: IProps) {
  return (
    <h2 className="font-bold sm:text-lg text-gray-700 capitalize">{title}</h2>
  );
}

export default Title;
