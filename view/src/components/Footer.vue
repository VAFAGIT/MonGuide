<template>
    <footer class="mt-16">
        <div class="border-t md:px-4 md:pt-10 md:pb-5">
            <div class="flex flex-wrap md:max-w-screen-lg mx-auto">
             <section
                class="relative text-purple-900  font-semibold border-b px-4 pb-4 md:py-3 w-full md:border-none md:w-1/4">
                <div class="md:hidden">
                    <button
                       onclick="toggleFooterSection(event)"
                       class="uppercase text-xs font-bold tracking-wider text-amber-400 focus:outline-none border-t border-white py-4 w-full text-left"
                       type="button">
                       Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas
                        mattis
                    </button>
                </div>
                <a
                    class="uppercase text-xs font-bold tracking-wider text-amber-400  hidden md:block"
                    href="#">
                    A PROPOS
                </a>
                <article class="h-0 md:h-auto -mt-4 md:mt-0 overflow-hidden">
                    <ul class="my-5 text-sm tracking-wide">
                        <li class="my-3 tracking-wide hover:text-amber-400">
                            <a href="#">About</a>
                        </li>
                        <li class="my-3 tracking-wide hover:text-amber-400">
                            <a href="#">Offers</a>
                        </li>
                        <li class="my-3 tracking-wide hover:text-amber-400">
                            <a href="#">Contact Us</a>
                        </li>
                        <li class="my-3 tracking-wide hover:text-amber-400">
                            <a href="#">Mon Espace</a>
                        </li>
                    </ul>
                </article>
                
             </section>

            </div>
        </div>
        <div class="max-w-screen-lg mx-auto border-none px-4">
            <section
                class="flex flex-col md:flex-row md:justify-between md:border-solid md:border-t text-gray-700 hover:text-amber-400 font-light text-sm pt-4 pb-6 md:pt-5 md:pb-6 w-full">
                <div>
                    <p class="leading-8 tracking-wide">
                     &copy; Mon Guide., 123 Lorem Street, Safi City</p>
                </div>
                  <div>
                        
                  </div>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a class="text-gray-500 hover:text-amber-400">
                           <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                           <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                           </svg>
                        </a>
                        <a class="ml-3 text-gray-500 hover:text-amber-400">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500 hover:text-amber-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500 hover:text-amber-400">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
            </section>
        </div>
    </footer>




   


</template>
