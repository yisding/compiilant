import Link from "next/link";
import { Button } from "./ui/button";

export default function Nav() {
  return (
    <div className="flex flex-row items-center">
      <Button asChild><Link href="/">Recording</Link></Button>
      <Button asChild><Link href="/admin">Admin</Link></Button>
      <Button asChild><Link href="/contractor">Contractor</Link></Button>
    </div>
  );
}
