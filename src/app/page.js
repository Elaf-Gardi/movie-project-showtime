import Test from "@/components/Test"

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col space-y-5 justify-center items-center py-36">
      <Link href='movies'> movies </Link>
      <Test />
    </div>
  )
}
