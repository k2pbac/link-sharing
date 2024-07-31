import CustomizeLinks from "@/components/views/customize-links/customize-links";
import CustomNav from "@/components/views/navbar/navbar";
import Preview from "@/components/views/preview/preview";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   async function getLinks() {

  //     const response = await axios.get(`/api/links/${user.id}`, {
  //       email,
  //       password,
  //     });
  //   }

  // }, [])

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
