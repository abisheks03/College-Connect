import CustomFeed from '@/components/homepage/CustomFeed'
import GeneralFeed from '@/components/homepage/GeneralFeed'
import { buttonVariants } from '@/components/ui/Button'
import { getAuthSession } from '@/lib/auth'
import { CalendarCheckIcon, Home as HomeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default async function Home() {
  const session = await getAuthSession()

  return (
    <>
    {/* subreddit info */}
        <div className='mt-[200px] overflow-hidden h-fit w-fit rounded-lg border border-gray-200 order-first md:order-last '>
          <div className='bg-emerald-100 px-6 py-4'>
            <p className='font-semibold py-3 flex items-center gap-1.5'>
              <Image src='/facespace.jpg' className='h-100 w-100 rounded-full' width={100} height={100}/>
              Face Space
            </p>
          </div>
          <dl className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
            <div className='flex justify-between gap-x-4 py-3'>
              <p className='text-zinc-500'>
                {/* <img src='imgs/1.jpg' className='h-100 w-100 rounded-full' alt='Image'/> */}
              </p>
            </div>

            <Link
              className={buttonVariants({
                className: 'w-full mt-4 mb-6',
              })}
              href={`/r/create`}>
              View More
            </Link>
          </dl>
        </div>
  
      
        
    </>

    )
}
