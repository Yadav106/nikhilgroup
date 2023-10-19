import getCurrentUser from "@/app/actions/getCurrentUser";
import DesktopNavbar from "./DesktopNavbar";
import Footer from '@/app/components/Footer'

async function Navbar ({
    children
} : {
    children: React.ReactNode
}) {

    const currentUser = await getCurrentUser();
    return (
        <div className="w-full flex flex-col">
            <DesktopNavbar user={currentUser}/>
            <main className="min-h-[80vh]">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Navbar