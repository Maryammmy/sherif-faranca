import Image from "@/src/components/ui/Image";
import CreateAccountForm from "./CreateAccountForm";
import { useTranslations } from "next-intl";

function CreateAccount() {
  const t = useTranslations("createAccount");
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-20 place-items-center my-5">
      <div className="space-y-3 flex flex-col justify-center w-full max-w-xl">
        <div className="space-y-3">
          <header>
            <h1 className="font-bold text-gray-800 text-3xl sm:text-4xl leading-11">
              {t("title")}{" "}
              <span className="text-primary">{t("beginning")}</span>
            </h1>
          </header>
        </div>
        <div>
          <CreateAccountForm />
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Image
          src="/create-account.png"
          alt="Create account"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default CreateAccount;
