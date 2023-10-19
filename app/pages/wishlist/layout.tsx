import Navbar from "../../components/navbar/Navbar";

export default async function UsersLayout({
    children
} : {
    children: React.ReactNode
}) {
    return (
        <Navbar>
            <div >
                {children}
            </div>
        </Navbar>
    )
}