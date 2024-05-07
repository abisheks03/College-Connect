import Events from "@/components/Events";
import { buttonVariants } from "@/components/ui/Button";
import { getAuthSession } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";


export default async function Home() {
  const session = await getAuthSession();
  

  return (
    <>
      {/* events info */}

      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold mb-4">Events</h1>

        <Link href="/events" className={buttonVariants({ variant: "outline" })}>
          + Add Event
        </Link>
      </div>
      <div className="mt-4"></div>
      {/* EVENT #1  */}
      <div className="mt-[50px] h-full flex flex-wrap justify-center items-center gap-10">
        <div className="w-fit rounded overflow-hidden shadow-lg">
          <Image
            className="w-fit"
            src='/Bits With Benefits.png'
            width={150}
            height={150}
          />
          <div className="px-6 py-4">
            <div className="flex items-center justify-center font-bold text-xl mb-2 ">
              Bits With Benefits
            </div>
          </div>
          <div className="px-6 pt-4 pb-2"></div>
        </div>

        {/* EVENT #2 */}
        <div className="w-fit rounded overflow-hidden shadow-lg">
          <Image
            className="w-fit"
            src="/Locked in reality.png"
            width={150}
            height={150}
          />
          <div className="px-6 py-4">
            <div className="flex items-center justify-center font-bold text-xl mb-2">
              Locked In Reality
            </div>
          </div>
          <div className="px-6 pt-4 pb-2"></div>
        </div>

        {/* EVENT #3 */}
        <div className="w-fit rounded overflow-hidden shadow-lg">
          <Image
            className="w-fit"
            src="/Cyber Siege .png"
            width={200}
            height={200}
          />
          <div className="px-6 py-4">
            <div className="flex items-center justify-center font-bold text-xl mb-2">
              Cyber Siege
            </div>
          </div>
          <div className="px-6 pt-4 pb-2"></div>
        </div> 

        
      </div>
    </>
  );
}
