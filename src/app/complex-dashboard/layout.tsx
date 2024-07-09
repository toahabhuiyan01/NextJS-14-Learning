
type LayoutType = {
    children: React.ReactNode
    users: React.ReactNode
    revenue: React.ReactNode
    notifications: React.ReactNode
}
export default function Layout({ children, users, revenue, notifications }: LayoutType) {
    return (
        <div>
            <h1>Complex Dashboard</h1>
            <div>
                {users}
                {revenue}
                {notifications}
            </div>
            {children}
        </div>
    )
}