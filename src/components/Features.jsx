import {
  ArrowPathRoundedSquareIcon,
  ChatBubbleLeftRightIcon,
  CursorArrowRaysIcon,
  DocumentCheckIcon,
  RectangleStackIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import RepairHistory from './RepairHistory'
const transferFeatures = [
  {
    id: 1,
    name: 'İletişim',
    description:
      'Tamire aldığınız cihazların son durumunu müşteriler, adlarına tanımlanmış 5 haneli kodla takip edebilir. Telefonları tamirde bile olsa sizle iletişim kurabilirler.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    id: 2,
    name: 'Saklama',
    description:
      'Tamirlerinizi profesyonel şekilde saklayın ve gerektiğinde geriye yönelik incelemeler ve çıkarımlar yapın.',
    icon: RectangleStackIcon,
  },
  {
    id: 3,
    name: 'Kontrol',
    description:
      'Tamirlerinizin durumunu ve çalışanlarınızı tek bir ekrandan yönetin. Çalışanlarınızın performansını ve iş yükünü gözlemleyin. Müşterilerinizin memnuniyetini ölçün ve geliştirin.',
    icon: CursorArrowRaysIcon,
  },
]
const communicationFeatures = [
  {
    id: 1,
    name: 'Forum',
    description:
      'Topluluğumuzla bilgi alışverişi yapabilir, sorularınıza yanıt bulabilir ve sektörle ilgili deneyimlerinizi paylaşabilirsiniz.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    id: 2,
    name: 'İkinci El Satış',
    description:
      'İhtiyaç duymadığınız ekipmanları veya ürünleri satma veya uygun fiyatlarla kaliteli ikinci el ürünler satın alma imkanı sağlıyoruz.',
    icon: ArrowPathRoundedSquareIcon,
  },
]

export default function Features() {
  return (
    <div className="overflow-hidden bg-white py-8">
      <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        <svg
          className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
        </svg>
           
          <div className="relative">
            <h2 className="text-center text-3xl font-bold font-sora leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Kontrol Tamamen Sizde
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
            TamTamir ile her tamirin hikayesi dijital olarak saklanır. İlgili müşteri ve çalışanlarınız tarafından son durumu takip edilebilir.
            </p>
          </div> 


        <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative">

            <dl className="space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-[#051229] text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                  </dt>
                  <dd className="ml-16 mt-2 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
            {/* <img
                className="relative mx-auto"
                width={490}
                src="https://tailwindui.com/img/features/feature-example-1.png"
                alt=""
              /> */}
            <div className='relative mx-auto max-w-lg bg-white p-4 rounded-lg shadow-xl'>
              <RepairHistory />
            </div>
          </div>
        </div>

        <svg
          className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>

      </div>
    </div>
  )
}
