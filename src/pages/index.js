import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello Arun.{" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
