interface IProps {
  newEmail: string;
}
function Content({ newEmail }: IProps) {
  return (
    <p className="font-medium text-secondary text-center">
      We are sending a verification code to your new email address:{" "}
      <span className="text-primary">{newEmail}</span> Please check your email
    </p>
  );
}

export default Content;
