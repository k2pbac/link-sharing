import CustomNav from "@/components/views/navbar/navbar";
import Preview from "@/components/views/preview/preview";
import Image from "next/image";

export default function Home() {
  return (
    <main className="homepage min-h-screen">
      <CustomNav />
      <div className="content">
        <Preview />
        <div></div>
      </div>
    </main>
  );
}
