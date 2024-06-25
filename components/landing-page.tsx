// Imports
import { db } from '@/lib/db'
import PrimaryButton from './ui/get-started-button'
import AvatarCircles from './ui/user-avatar-card'
import { TestimonialCard } from './testimonials'
import Link from 'next/link'
import Footer from './Footer'

export default async function LandingPage() {
  const users = await db.user.count()
  const cardData = [
    {
      imgSrc: '/dash.png',
      title: 'Full Stack Analytics Dashboard',
      badge: 'NEW',
      href: '/',
      description:
        'Build a functional dashboard to track your apps user information, payments, and more!',
      tags: ['NextJS', 'Typescript']
    },
    {
      imgSrc: '/backend.png',
      title: 'Functional Backend & Database',
      badge: 'NEW',
      href: '/courses/functional-backend-database/info',
      description:
        'Learn the basics of backend developement by connecting to & storing user data in a database!',
      tags: ['Prisma', 'Postgres', 'NeonDB']
    },
    {
      imgSrc: '/stripe.png',
      title: 'StripeJS Payment Integration',
      badge: 'NEW',
      href: '/courses/stripe/info',
      description:
        'Recieve payments from your users by building & connecting to stripe to your software.',
      tags: ['NextJS', 'Typescript', 'Stripe']
    }
  ]

  return (
    <div className="py-[100px] space-y-[250px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="flex flex-col justify-center text-center lg:text-left">
            <span className="flex flex-col text-5xl md:text-5xl lg:text-6xl font-bold header-landing text-baseContent">
              Learn To Code
              <span>
                {' '}
                &&{' '}
                <span className="underline decoration-wavy decoration-primary underline-offset-8">
                  Have Fun
                </span>
              </span>
              <span>Doing It</span>
            </span>
            <span className="py-[16px] font-medium text-xl text-baseContentSecondary ">
              Build beautiful apps & websites with easy to follow tutorials
            </span>
            <div className="flex items-center justify-center lg:justify-start">
              <PrimaryButton href="/courses" />
            </div>
            <div className="pt-4">
              <AvatarCircles className="flex items-center justify-center lg:flex lg:justify-start" />
              <p className="font-semibold text-baseContent mt-2 lg:ml-2">
                Join <span className="font-extrabold">{users}</span> improved
                developers!
              </p>
            </div>
          </div>
          {/*<Bento className="text-center select-none" />*/}
        </div>
        <div className="flex items-center justify-center md:h-full">
          <div className="mockup-window bg-[#0F0F0F] border-2 border-slate-100/20 w-full max-w-[1060px] shadow-xl">
            <iframe
              className="w-full aspect-video player"
              src="https://player.vimeo.com/video/940121640?&muted=1&loop=1&autopause=0?badge=0&&amp;player_id=0&amp;app_id=58479"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </div>
      </div>

      <div className="space-y-8 bg-[#0F0F0F] py-20">
        <h1 className="text-baseContent text-5xl md:text-5xl lg:text-6xl font-bold text-center ">
          Tutorials That Actually Help
        </h1>
        <p className="text-lg font-semibold text-baseContentSecondary text-center pb-7 ">
          Our courses include a mix of building & learning. The perfect mix for
          anyone trying to learn!{' '}
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 items-center">
          {cardData.map((card, index) => (
            <Link
              href={card.href}
              key={index}
              className="card w-96 md:w-full bg-base100 text-baseContent shadow-xl mx-8"
            >
              <figure>
                <img src={card.imgSrc} alt="Course Image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {card.title}
                  <div className="badge badge-secondary bg-primary text-base100 border-primary">
                    {card.badge}
                  </div>
                </h2>
                <p className="text-baseSecondary">{card.description}</p>
                <div className="card-actions justify-end">
                  {card.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="badge badge-outline hover:border-primary hover:bg-primary/25"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center space-y-5 px-2 scroll-mt-8" id="testimonials">
        <h1 className="text-baseContent text-5xl md:text-5xl lg:text-6xl font-bold">
          {users} Happy Developers
        </h1>
        <p className="text-lg font-medium text-baseContentSecondary">
          Here's what developers have to say about us.
        </p>
        <TestimonialCard />
      </div>
    </div>
  )
}
