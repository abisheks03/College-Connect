import CustomFeed from '@/components/homepage/CustomFeed'
import GeneralFeed from '@/components/homepage/GeneralFeed'
import { buttonVariants } from '@/components/ui/Button'
import { getAuthSession } from '@/lib/auth'
import { CalendarCheckIcon, Home as HomeIcon } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default async function Home() {
  const session = await getAuthSession()

  return (
    <>
      <h1 className='mt-[-10px] font-bold text-3xl md:text-4xl'>Your feed</h1>
      <div className='mt-[-5px] grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-6 py-6'>
        {/* @ts-expect-error server component */}
        {session ? <CustomFeed /> : <GeneralFeed />}
      <div className='flex-1'>
        {/* subreddit info */}
        <div className='overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last'>
          <div className='bg-emerald-100 px-6 py-4'>
            <p className='font-semibold py-3 flex items-center gap-1.5'>
              <HomeIcon className='h-4 w-4' />
              Home
            </p>
          </div>
          <dl className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
            <div className='flex justify-between gap-x-4 py-3'>
              <p className='text-zinc-500'>
                Your personal College Connect frontpage. Come here to check in with what your college friends are upto.
              </p>
            </div>

            <Link
              className={buttonVariants({
                className: 'w-full mt-4 mb-6',
              })}
              href={`/r/create`}>
              Create Community
            </Link>
          </dl>
        </div>
  
      
        {/* events info */}
        <div className='mt-[20px] overflow-hidden h-fit rounded-lg border border-gray-200 order-first md:order-last'>
          <div className='bg-red-100 px-6 py-4'>
            <p className='font-semibold py-3 flex items-center gap-1.5'>
              <CalendarCheckIcon className='h-4 w-4' />
              Events
            </p>
          </div>
          <dl className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
            <div className='flex justify-between gap-x-4 py-3'>
              <p className='text-zinc-500'>
                Keep yourself updated with all the events happening in college.
              </p>
            </div>

            <Link
              className={buttonVariants({
                className: 'w-full mt-4 mb-6',
              })}
              href={`/events`}>
              Upcoming Events
            </Link>
          </dl>
        </div>
      </div>
    </div>  
    </>
  )
}
