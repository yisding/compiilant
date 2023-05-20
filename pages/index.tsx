import Player from "@/components/Player";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Head from "next/head";

import recordings from "@/lib/recordings";

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

  return (
    <>
      <Head>
        <title>ComPIIlant</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="flex flex-row">
          <Select>
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

          <Select>
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
          {recordings.map((recording, i) => <Player key={i} originalText={recording.originalText} recordingURL={recording.recordingURL} laws={recording.laws} />)}
        </div>
      </main>
    </>
  );
}
