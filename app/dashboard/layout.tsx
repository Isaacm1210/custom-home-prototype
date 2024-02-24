import NavBar from "../ui/dashboard/navbar"
export default function Layout({children}: {children: React.ReactNode}){
    return (
        <div>
            <NavBar/>
            <div>{children}</div>
        </div>
    )
}