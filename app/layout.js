import MainHeaders from "@/components/main-header";
import "./globals.css";
import BackgroundHeader from "@/components/main-header-background";
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BackgroundHeader />
        <MainHeaders />
        {children}
      </body>
    </html>
  );
}
