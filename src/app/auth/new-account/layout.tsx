export default function ShopLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <main className="bg-blue-500 min-h-screen">{children}</main>;
  }
  