// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image';
import avtrOne from '../../../public/asset/avtr1.jpg';
import avtrTwo from '../../../public/asset/avtr2.jpg';
import avtrThree from '../../../public/asset/avtr3.jpg';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "This is the best service I've ever used! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: avtrOne,
    position: "CEO of XYZ Corp",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Absolutely fantastic experience! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: avtrTwo,
    position: "CTO of ABC Ltd",
  },
  {
    id: 3,
    name: "Sam Wilson",
    feedback: "I would highly recommend this to anyone. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: avtrThree,
    position: "Founder of QRS Inc",
  }
];

export default function MobileTestimonial() {
  return (
    <div className="res w-full py-8">
      <h2 className="text-center text-2xl sm:text-3xl text-amber-400 font-semibold mb-6">Testimonials</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="pb-10 w-full testimonial-swiper"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className='w-full'>
            <div className="mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 bg-gray-800 sm:p-10 rounded-lg shadow-md py-8">
              <div className="relative w-[140px] h-[140px] shrink-0">
                <div className="absolute inset-0 bg-amber-400 rounded-full -top-4 -left-4 sm:-top-5 sm:-left-5 z-0" />
                <div className="relative z-10 w-full h-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>


              <div className="text-center sm:text-left max-w-lg max-sm:max-w-[220px]">
                <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">"{testimonial.feedback}"</p>
                <h3 className="text-base sm:text-lg font-semibold text-white">{testimonial.name}</h3>
                <p className="text-sm text-gray-400">{testimonial.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
