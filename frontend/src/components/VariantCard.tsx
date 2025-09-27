// components/VariantCard.tsx
'use client'

import Image from "next/image"

interface VariantCardProps {
  title: string
  emoji: string
  description: string
  image: string
  gradient: string
  tags: { text: string; color: string }[]
  reverse?: boolean // zigzag layout
}

export default function VariantCard({
  title,
  emoji,
  description,
  image,
  gradient,
  tags,
  reverse = false,
}: VariantCardProps) {
  return (
    <div className="relative">
      <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:flex-row-reverse" : ""}`}>
        
        {/* Image */}
        <div className={`relative group ${reverse ? "lg:order-2" : ""}`}>
          <div
            className={`absolute -inset-4 ${gradient} rounded-3xl ${
              reverse ? "-rotate-1 group-hover:-rotate-2" : "rotate-1 group-hover:rotate-2"
            } transition-transform duration-300`}
          ></div>
          <div className="relative bg-white rounded-2xl p-4 shadow-xl">
            <Image
              src={image}
              alt={`Susu Kambing Rasa ${title}`}
              width={500}
              height={300}
              className="rounded-2xl object-cover w-full h-64 md:h-80"
            />
          </div>
        </div>

        {/* Content */}
        <div className={`${reverse ? "lg:order-1" : ""} space-y-6`}>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{emoji}</span>
            <h3 className={`text-3xl md:text-4xl font-bold bg-clip-text text-transparent ${gradient}`}>
              {title}
            </h3>
          </div>

          <div className={`h-1 w-16 rounded-full ${gradient}`}></div>

          <p className="text-lg text-gray-600 leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${tag.color}`}
              >
                {tag.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}