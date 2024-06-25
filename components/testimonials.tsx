'use client'

import React from 'react'
import { Avatar } from '@mui/material'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { AtSign } from 'lucide-react'

const testimonials = [
  {
    username: 'Paulos',
    avatar: '/testimonials/paulos.webp',
    message:
      "I have been learning to code for a while now, and I have to say that Nizar's channel has been a great help. The discord community is so helpful, and the content is top-notch :)."
  },
  {
    username: 'Solomon.chidera',
    avatar: '/testimonials/solomon.webp',
    message:
      "Discovered this server on YouTube, and it's been a pleasant surprise. The community here is so welcoming, and the content is genuinely helpful, unlike some others out there just looking to grab your attention and money."
  },
  {
    username: 'Bacio001',
    avatar: '/testimonials/bacio.webp',
    message:
      'Nizar helped me keep motivation in my own startup, and his videos are also nice to listen to while coding by myself.'
  },
  {
    username: 'JonasDieNuss',
    avatar: '/testimonials/jonas.webp',
    message:
      'Nizar on YT has been a game-changer for me! His educational and entertaining videos really helped me get back into coding, improve my skills, and establish better routines. I owe a lot of my progress to his guidance and suggestions.'
  },
  {
    username: 'Tiernandefranco',
    avatar: '/testimonials/tiernande.webp',
    message:
      "Nizar's channel came into my recommended shortly after I had finished learning basic web development, and despite originally attempting to leverage my skills in a regular career, his videos showcasing him building his startup pulled me back into pursuing an idea I had semi-given up on."
  },
  {
    username: 'Paul',
    avatar: '/testimonials/paul.webp',
    message:
      "Nizar has built an extraordinary community that I'm proud to be a part of. Surrounded by individuals eager to learn and help each other in tech and business, it has become the ideal environment for developing startup ideas and advancing open-source projects."
  },
  {
    username: 'Amanbhujel',
    avatar: '/testimonials/aman.webp',
    message:
      "After watching Nizar's videos, I've been inspired to pursue my own business venture, and I'm confident he'll become a remarkable entrepreneur and influencer."
  },
  {
    username: 'Liambrewster ',
    avatar: '/testimonials/liam.webp',
    message:
      'Nizar’s breakdown of project building in live streams and videos is simply brilliant. His clear, easy-to-follow approach has made a significant impact on my understanding and confidence to get building! Highly recommended!'
  },
  {
    username: 'Svenplb',
    avatar: '/testimonials/sven.webp',
    message:
      'Nizar simplifies coding into easy, bite-sized videos, making complex concepts easy to understand. Beyond teaching code, he guides you on how to think like a programmer, almost like rewiring your brain.'
  },

  {
    username: 'Calculuscoder',
    avatar: '/testimonials/calculus.webp',
    message:
      "Nizar has been a great friend, leader, and instructor in the software development field. I've closely followed his videos and YouTube channel for several months and his content is amazing."
  },
  {
    username: 'Gorlami',
    avatar: '/testimonials/mbdtf.webp',
    message:
      "Nizar's content consistently delivers valuable insights and entertainment in equal measure. Proud to be a part of your community!"
  },
  {
    username: '3.ba',
    avatar: '/testimonials/3ba.webp',
    message:
      "Nizar is the reason why i'm continue working on my project because of his motivate videos on his youtube channel"
  }
]

export function TestimonialCard() {
  return (
    <div className="w-fit mx-auto max-w-7xl">
      <ResponsiveMasonry
        className="flex mx-auto justify-start"
        columnsCountBreakPoints={{ 350: 1, 750: 2, 1100: 3 }}
      >
        <Masonry gutter="1.5rem" className="masonry-grid">
          {testimonials.map((testimonial) => (
            <div
              className="flex h-full cursor-default"
              key={testimonial.username}
            >
              <div className="bg-base100 relative group/card border-slate-100/20 h-full rounded-lg px-5 py-4 border-2 hover:bg-primary/5 hover:border-primary/50 transition duration-200">
                <div className="flex justify-between">
                  <div className="text-base sm:text-xl font-bold text-baseContent flex space-between items-center">
                    <div className="flex gap-2 items-center">
                      <Avatar
                        src={testimonial.avatar}
                        alt={`${testimonial.username}s Avatar`}
                      />
                      <span className="flex gap-0.5 items-center">
                        @{testimonial.username}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="font-medium pt-4 text-baseContentSecondary opacity-70">
                  <p>"{testimonial.message}"</p>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}
