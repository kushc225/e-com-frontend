
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
        <div className="border-2 border-blue-300 ">
        <Navbar />
      {children}
        </div>
     </div>
    </>
  )
}