import CustomizeLinks from "@/components/views/customize-links/customize-links";
import CustomNav from "@/components/views/navbar/navbar";
import Preview from "@/components/views/preview/preview";

export default function Home() {
  return (
    <main className="homepage min-h-screen">
      <CustomNav />
      <div className="content">
        <Preview />
        <CustomizeLinks />
      </div>
    </main>
  );
}
