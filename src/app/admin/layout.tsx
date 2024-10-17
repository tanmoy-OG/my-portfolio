import AsideAdmin from "./components/aside"

const AdminLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => (
  <div className="flex">
    <AsideAdmin />
    {children}
  </div>
)

export default AdminLayout
