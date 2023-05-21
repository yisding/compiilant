import { useState } from "react";
import Head from "next/head";

import Player from "@/components/Player";
import Speaky from "@/components/Speaky";

import allRecordings from "@/lib/recordings";
import Nav from "@/components/Nav";

export default function Home() {
  const categories = [
    { id: "name", display: "Name" },
    { id: "address", display: "Address" },
    { id: "birth_place", display: "Birth Place" },
    { id: "birth_date", display: "Birth Date" },
    { id: "age", display: "Age" },
    { id: "ethnicity", display: "Ethnicity" },
    { id: "health_condition", display: "Health Condition" },
  ];
  const laws = ["HIPAA", "COPPA", "GDPR"];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLaw, setSelectedLaw] = useState("");

  const recordings = allRecordings.filter((recording) => {
    return (
      (!selectedLaw || recording.laws.includes(selectedLaw)) &&
      (!selectedCategory || recording.tags.includes(selectedCategory))
    )
  });
  
  return (
    <>
      <Head>
        <title>ComPIIlant</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex min-h-screen flex-col items-center p-24">
        <Nav />
        <Speaky />
      </main>
    </>
  );
}
