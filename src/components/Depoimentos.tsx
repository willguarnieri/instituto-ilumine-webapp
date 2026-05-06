import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import depoimentosData from '../data/depoimentos.json';
import type { Depoimento } from '../types/depoimento';

const depoimentos = depoimentosData as Depoimento[];

export function Depoimentos() {
  return (
    <Swiper modules={[Navigation, Pagination, Autoplay]} navigation autoplay speed={3000}>
      {depoimentos.map((item, idx) => (
        <SwiperSlide key={`${item.nome}-${idx}`}>
          <div className="bg-white container lg:w-8/12 flex justify-center items-center flex-col">
            <div className="text-center px-8">
              <p className="font-museoRegular uppercase text-sm text-darkGray my-6">{item.nome}</p>
              <p className="font-museoRegular text-sm text-darkGray my-6">{item.citacao}</p>
            </div>
            <img className="h-8/12 w-8/12 my-10 rounded-full" src="/assets/icons/pink-line.svg" alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
