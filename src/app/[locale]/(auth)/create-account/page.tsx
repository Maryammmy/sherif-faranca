import CreateAccountComponent from "@/src/components/auth/create-account";
import SystemLoader from "@/src/components/loader/SystemLoader";
import { Suspense } from "react";

function CreateAccount() {
  return (
    <Suspense fallback={<SystemLoader />}>
      <CreateAccountComponent />
    </Suspense>
  );
}

export default CreateAccount;
