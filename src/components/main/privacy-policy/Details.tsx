import { IPrivacyPolicy } from "@/src/interfaces";

interface IProps {
  data: IPrivacyPolicy;
}

function Details({ data }: IProps) {
  return (
    <div className="p-4 space-y-6">
      {/* العنوان */}
      <h2 className="text-2xl font-bold">{data.title}</h2>

      {/* القسم الأول */}
      {data.section1 && (
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{data.section1}</h2>
          <p>{data.content1}</p>
        </div>
      )}

      {/* القسم الثاني */}
      {data.section2 && (
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{data.section2}</h2>
          <p>{data.content2}</p>
        </div>
      )}
    </div>
  );
}

export default Details;
