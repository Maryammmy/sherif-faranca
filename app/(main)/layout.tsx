import Header from "@/components/main/Header";
import Sidebar from "@/components/main/sidebar/Sidebar";
import { SidebarProvider } from "@/context/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <>
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto p-5 pt-4">
              {children}
            </main>
          </>
        </div>
      </div>
    </SidebarProvider>
  );
}
