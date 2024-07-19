import photo from '../assets/photo.jpg'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import {db} from "../../firebase.config.js"
import { ref, set } from "firebase/database";
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [selectedBudget, setSelectedBudget] = useState('');
  const [loading, setLoading] = useState(false)

  const handleBudgetChange = (event) => {
    setSelectedBudget(event.target.value);
  };

  const saveMessage = (e) => {
    e.preventDefault()
    if(!firstName || !lastName || !company || !email || !selectedBudget) {
      toast.error('Lütfen zorunlu alanları doldurun.')
      return;
    }
    setLoading(true)
    set(ref(db, 'users/' + Date.now()), {
      firstName: firstName,
      lastName: lastName,
      company: company,
      email: email,
      phone: phone,
      message: message,
      budget: selectedBudget
    }).then(() => {
      setLoading(false)
      toast.success('Teşekkürler, Mesajınız başarıyla gönderildi!')
    }).catch((error) => {
      setLoading(false)
      toast.error('Bir hata oluştu, lütfen tekrar deneyin.')
      console.log(error)
    });
  }

  return (
    <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 shadow-xl lg:right-0 lg:w-1/2">
              <img
                className="h-56 lg:rounded-l-lg w-full object-cover lg:absolute lg:h-full"
                src={photo}
                alt=""
              />
            </div>
          </div>
          <div className="relative px-6 py-16 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
            <div className="lg:pr-8">
              <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-sora">Önerilerinize ihtiyacımız var</h2>
                <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                TamTamir olarak sizin geri dönütlerinize ve önerilerinize ihtiyacımız var. Tamir dükkanınıza daha iyi nasıl hizmet edebileceğimizi öğrenmek ve hizmetlerimizi sizin ihtiyaçlarınıza göre şekillendirmek istiyoruz.
                </p>
                <form onSubmit={saveMessage} method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      Ad <span className='text-red-500'>*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Soyad <span className='text-red-500'>*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email <span className='text-red-500'>*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Tamir Dükkanı <span className='text-red-500'>*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Telefon
                      </label>
                      <span id="phone-description" className="text-sm text-gray-500">
                        İsteğe bağlı
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                        Tamir dükkanınıza nasıl yardım edebiliriz?
                      </label>
                      <span id="phone-description" className="text-sm text-gray-500">
                        İsteğe bağlı
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="how-can-we-help"
                        name="how-can-we-help"
                        aria-describedby="how-can-we-help-description"
                        rows={4}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>
                  <fieldset className="sm:col-span-2">
                    <legend className="block text-sm font-medium text-gray-700">Beklenen aylık ücret <span className='text-red-500'>*</span></legend>
                    <p className='text-xs text-gray-600'>Lütfen TamTamir için adil ve bütçenize uygun bir aylık ücretlendirme beklentisi seçin.</p> 
                    <div className="mt-4 grid grid-cols-1 gap-y-4">
                      <div className="flex items-center">
                        <input
                          id="budget-under-25k"
                          name="budget"
                          defaultValue="under_100"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-500"
                          checked={selectedBudget === 'under_100'}
                          onChange={handleBudgetChange}
                        />
                        <label htmlFor="budget-under-25k" className="ml-3">
                          <span className="block text-sm text-gray-700">₺100'den düşük</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-25k-50k"
                          name="budget"
                          defaultValue="100-150"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-500"
                          checked={selectedBudget === '100-150'}
                          onChange={handleBudgetChange}
                        />
                        <label htmlFor="budget-25k-50k" className="ml-3">
                          <span className="block text-sm text-gray-700">₺100 - ₺150</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-50k-100k"
                          name="budget"
                          defaultValue="150-200"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-500"
                          checked={selectedBudget === '150-200'}
                          onChange={handleBudgetChange}
                        />
                        <label htmlFor="budget-50k-100k" className="ml-3">
                          <span className="block text-sm text-gray-700">₺150 - ₺200</span>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="budget-over-100k"
                          name="budget"
                          defaultValue="over_200"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-slate-600 focus:ring-slate-500"
                          checked={selectedBudget === 'over_200'}
                          onChange={handleBudgetChange}
                        />
                        <label htmlFor="budget-over-100k" className="ml-3">
                          <span className="block text-sm text-gray-700">₺200+</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div className="text-right sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center space-x-2 justify-center rounded-md border border-transparent bg-[#051229] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                    >
                      {loading && <svg className="animate-spin mx-4 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>}
                      {!loading && 
                      <>
                      Gönder
                      <div className='ml-1.5 -rotate-12'>
                       <PaperAirplaneIcon className="h-4 w-4 text-white" aria-hidden="true" />
                     </div>
                     </>
                      }
                    </button>
                  
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Contact