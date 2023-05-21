import { useState } from "react";
import Head from "next/head";

import Player from "@/components/Player";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
        <div className="flex flex-row">
          <Select onValueChange={(value) => {setSelectedCategory(value); setSelectedLaw("")}}>
            <SelectTrigger className="w-[180px] m-12">
              <SelectValue placeholder="Categories" />
            </SelectTrigger>
            <SelectContent className="z-10">
              {categories.map((category, i) => (
                <SelectItem key={i} value={category.id} className="z-10">
                  {category.display}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={(value) => {setSelectedCategory(""); setSelectedLaw(value)}}>
            <SelectTrigger className="w-[180px] m-12">
              <SelectValue placeholder="Laws" />
            </SelectTrigger>
            <SelectContent className="z-10">
              {laws.map((law, i) => (
                <SelectItem key={i} value={law} className="z-10">
                  {law}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col">
          {recordings.map((recording, i) => (
            <Player
              key={i}
              laws={recording.laws}
              tags={recording.tags}
              redactedMarkdown={recording.redactedMarkdown}
              redactedText={recording.redactedText}
            />
          ))}
        </div>
      </main>
    </>
  );
}
