export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
       
        <nav>This is layout</nav>
        {children}
      </section>
    )
  }