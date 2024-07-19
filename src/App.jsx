import { ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid'
import dashboard from "./assets/dashboard.png"
import Features from './components/Features'
import Contact from './components/Contact'
import brand from './assets/brand.png'
import { useEffect, useState } from 'react'
import { set, ref, increment, update, get } from 'firebase/database'
import { db } from '../firebase.config'
import toast from 'react-hot-toast'


export default function App() {
  const [emailAddress, setEmailAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [shopCount, setShopCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if(!emailAddress) {
      toast.error('Lütfen bir e-posta adresi girin.')
      setLoading(false)
      return;
    }
    handleShopCount(e);
    set(ref(db, 'waitingList/' + Date.now()), {
      emailAddress: emailAddress
    }).then(() => {
      setLoading(false)
      toast.success('Harika! Bekleme listesine eklendiniz.')
    }).catch((error) => {
      setLoading(false)
      toast.error('Bir hata oluştu, lütfen tekrar deneyin.')
      console.log(error)
    });
    setEmailAddress('');
  }

  const handleShopCount = (e) => {
    e.preventDefault();
    const shopCountRef = ref(db, 'shopCount');
    update(shopCountRef, {
      shopCount: increment(1)
    })
    setShopCount(shopCount + 1);
  }

  useEffect(() => {
    const shopCountRef = ref(db, 'shopCount');
    get(shopCountRef).then((snapshot) => {
      if(snapshot.exists()) {
        setShopCount(snapshot.val().shopCount);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.log(error)
    }
    )
  }, [])



  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight-1300, behavior: 'smooth' });
  }

  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-24">
          <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div>
              <div>
                <img
                  className="h-16 w-auto"
                  src={brand}
                  alt="Your Company"
                />
              </div>
              <div className="mt-10">
                <div>
                  <div className="cursor-pointer inline-flex space-x-4" onClick={handleClick}>
                    <span className="inline-flex items-center space-x-1 text-sm font-medium text-rose-500">
                      <span>Önerilerinizle gelişmemize yardım edin</span>
                      <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-4xl font-bold tracking-tight font-sora text-gray-900 sm:text-5xl">
                    Tamir sürecini herkes için kolaylaştırıyoruz
                  </h1>
                  <p className="mt-6 text-xl text-gray-500">
                  Dükkanınızı dijitalleştirmenin ve tamirlerinizi en etkili şekilde yönetmenin keyfini çıkarın. En kapsamlı tamir yönetimi çözümüyle tanışın.</p>
                </div>
                <form onSubmit={handleSubmit} className="mt-12 sm:flex sm:w-full sm:max-w-lg">
                  <div className="min-w-0 flex-1">
                    <input
                      id="hero-email"
                      type="email"
                      className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-slate-500 focus:ring-slate-500"
                      placeholder="E-Posta Adresinizi Girin"
                      value={emailAddress}
                      onChange={({ target }) => setEmailAddress(target.value)}
                    />
                  </div>
                  <div className="mt-4 sm:ml-3 sm:mt-0">
                    {loading ? (
                      <button
                      className="block w-full rounded-md border border-transparent bg-[#9FF395] px-5 py-3 text-base font-medium text-[#051229] shadow hover:bg-[#87ce7d] focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 sm:px-10"
                      disabled
                    >
                       <svg className="animate-spin mx-auto h-5 w-5 text-[#051229]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                     </svg>
                     </button>
                     ) : (
                       <button
                       type="submit"
                       className="block w-full rounded-md border border-transparent bg-[#9FF395] px-5 py-3 text-base font-medium text-[#051229] shadow hover:bg-[#87ce7d] focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 sm:px-10"
                     >
                       Beni Haberdar Et
                     </button>
                        )
                      }
                  </div>
                </form>
                <div className="mt-6">
                  <div className="inline-flex items-center divide-x divide-gray-300">
                
                    <div className="min-w-0 flex-1 py-1 text-sm text-gray-500 sm:py-3">
                      <span className="font-medium text-gray-900">{shopCount} Tamir Dükkanı</span> bekleme listesine adını yazdırarak 2 aylık{' '}
                      <span className="font-medium text-rose-500">%50 indirim kazandı.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full" />
                <svg
                  className="absolute right-1/2 top-8 -mr-3 lg:left-0 lg:m-0"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                </svg>
              </div>
              <div className="relative -mr-40 pl-6 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                <img
                  className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                  src={dashboard}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <Features />
        <Contact />

      </main>

      {/* Footer section */}
      <footer className="mt-24 bg-gray-900 sm:mt-12">
        <div className="mx-auto max-w-md overflow-hidden px-6 py-12 sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <p className="text-center text-base text-gray-400">
            &copy; 2024 Tamtamir, tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  )
}

