export const metadata = {
  title: "Sanity Studio - PT. IDEAA BUDI PERKASA",
  description: "PT. IDEAA BUDI PERKASA Headless CMS",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
