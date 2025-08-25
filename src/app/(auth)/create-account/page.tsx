import CreateAccountComponent from "@/src/components/auth/create-account";
import { Suspense } from "react";

function CreateAccount() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreateAccountComponent />
    </Suspense>
  );
}

export default CreateAccount;
