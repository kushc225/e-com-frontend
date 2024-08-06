
import Navbar from "@/components/common/Navbar/Navbar"
import NavbarOfferentAlert from "@/components/common/NavbarOfferentAlert/NavbarOfferentAlert"


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
     <NavbarOfferentAlert/>
     <div className="w-full flex flex-col justify-center mt-5">
        <div className="px-1 sm:px-2 md:px-6 lg:px-14 ">
        <Navbar />
      {children}
        </div>
     </div>
    </>
  )
}