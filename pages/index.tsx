import Player from "@/components/Player";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Head from "next/head";

export default function Home() {
  const categories = [{id: "name"}, {id: "address"}, {id: "birth_place"}, {id: "birth_date"}, {id: "age"}, {id: "ethnicity"}, {id: "health_condition"}];
  const laws = ["HIPAA", "COPPA", "GDPR"];

  return (
    <>
      <Head>
        <title>ComPIIlant</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-row">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Categories" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category, i) => (
                <SelectItem key={i} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Laws" />
            </SelectTrigger>
            <SelectContent>
              {laws.map((law, i) => (
                <SelectItem key={i} value={law}>
                  {law}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row">
          <Player />
        </div>
      </main>
    </>
  );
}
