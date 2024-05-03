import CustomFeed from "@/components/homepage/CustomFeed";
import GeneralFeed from "@/components/homepage/GeneralFeed";
import { buttonVariants } from "@/components/ui/Button";
import { getAuthSession } from "@/lib/auth";
import { CalendarCheckIcon, Home as HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



export default async function Home() {
  const session = await getAuthSession();

  return (
    <>
      {/* events info */}
    
      <div className="flex justify-between items-center ">
        <h1 className="text-xl font-semibold mb-4">Events</h1>
      </div>

      {/* EVENT #1  */}
      <div className="h-full flex flex-wrap justify-center items-center gap-10">
        <div className="w-fit rounded overflow-hidden shadow-lg cursor-pointer" >
          <Image className="w-full" src="/Bits With Benefits.png" width={150} height={150} />
          <div className="px-6 py-4">
            <div className="flex items-center justify-center font-bold text-xl mb-2 ">
              Bits With Benefits
            </div>
          </div>
          <div className="px-6 pt-4 pb-2"></div>
        </div>


        {/* EVENT #2 */}
        <div className="w-fit rounded overflow-hidden shadow-lg">
          <Image className="w-fit" src="/Locked in reality.png" width={150} height={150} />
          <div className="px-6 py-4">
            <div className="flex items-center justify-center font-bold text-xl mb-2">
              Locked In Reality
            </div>
          </div>
          <div className="px-6 pt-4 pb-2"></div>
        </div>


        {/* EVENT #3 */}
        <div className="w-fit rounded overflow-hidden shadow-lg">
          <Image className="w-fit" src="/Cyber Siege .png" width={200} height={200} />
          <div className="px-6 py-4">
            <div className="flex items-center justify-center font-bold text-xl mb-2">
              Cyber Siege
            </div>
          </div>
          <div className="px-6 pt-4 pb-2"></div>
        </div>


        {/* EVENT #4 */}
        <div className="w-fit rounded overflow-hidden shadow-lg">
          <Image className="w-fit" src="/Improv .png" width={150} height={150} />
          <div className="px-6 py-4">
            <div className="flex items-center justify-center font-bold text-xl mb-2">
              Improv
            </div>
          </div>
          <div className="px-6 pt-4 pb-2"></div>
        </div>


        {/* EVENT #5 */}
        <div className="w-fit rounded overflow-hidden shadow-lg">
          <Image className="w-fit" src="/Respawn .png" width={150} height={150} />
          <div className="px-6 py-4">
            <div className="flex items-center justify-center font-bold text-xl mb-2">
              Respawn
            </div>
          </div>
          <div className="px-6 pt-4 pb-2"></div>
        </div>


        {/* EVENT #6 */}
        <div className="w-fit rounded overflow-hidden shadow-lg">
          <Image className="w-fit" src="/Riff-Off.jpg" width={150} height={150} />
          <div className="px-6 py-4">
            <div className="flex items-center justify-center font-bold text-xl mb-2">
              Riff Off
            </div>
          </div>
          <div className="px-6 pt-4 pb-2"></div>
        </div>


        {/* EVENT #7 */}
        <div className="w-fit rounded overflow-hidden shadow-lg">
          <Image className="w-fit" src="/SherLocked.png" width={150} height={150} />
          <div className="px-6 py-4">
            <div className="flex items-center justify-center font-bold text-xl mb-2">
              SherLocked
            </div>
          </div>
          <div className="px-6 pt-4 pb-2"></div>
        </div>


        {/* EVENT #8 */}
        <div className="w-fit rounded overflow-hidden shadow-lg">
          <Image className="w-fit" src="/Techtainment .jpg" width={150} height={150} />
          <div className="px-6 py-4">
            <div className="flex items-center justify-center font-bold text-xl mb-2">
              Techtainment
            </div>
          </div>
          <div className="px-6 pt-4 pb-2"></div>
        </div>
      </div>
    </>
  );
}
