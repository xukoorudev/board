import { Navbar } from "./_components/navbar";
import { OrgSidebar } from "./_components/org-sidebar";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({
   children
}: {children: React.ReactNode}) => {
   return ( 
      <main className="h-full">
         <Sidebar />
         <div className="pl-[60px] h-full">
            <div className="flex h-full gap-x-3">
               <OrgSidebar />
               <div className="h-full flex-1">
                  <Navbar />
                  {children}
               </div>
            </div>
         </div>
      </main>
    );
}
 
export default DashboardLayout;