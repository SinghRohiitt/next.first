
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
      <div className="border-b p-1 text-center">20% off fot he next few day</div>
        {children}
        </div>
    );
  }
  