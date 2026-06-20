const headerHTML = `
    <header class="sticky top-0 z-50 w-full border-b border-[#1e1e1e] bg-[#121212]/80 backdrop-blur-md">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Logo aur Title -->
                <div class="flex-shrink-0 flex items-center">
                    <a href="/">
                        <img src="sada-pos-logo.png" alt="SadaPOS Logo" class="h-10 w-auto">
                    </a>
                </div>
                
                <!-- Desktop Menu -->
                <nav class="hidden md:flex space-x-8">
                    <a href="/" class="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</a>
                    <a href="/features" class="text-sm font-medium text-gray-300 hover:text-white transition-colors">Features</a>
                    <a href="/pricing" class="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pricing</a>
                    <a href="/contact-us" class="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contact</a>
                </nav>

                <!-- Call to Action Button -->
                <div class="hidden md:flex">
                    <a href="https://app.sadapos.com" onclick="return gtag_report_conversion('https://app.sadapos.com');" class="bg-[#3ecf8e] hover:bg-[#3ecf8e]/90 text-[#121212] px-5 py-2 rounded-md text-sm font-bold transition-all shadow-[0_0_15px_rgba(62,207,142,0.2)]">
                        Go to App
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-btn" aria-label="Menu" class="text-gray-300 hover:text-white focus:outline-none">
                        <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu Dropdown -->
        <div id="mobile-menu" class="hidden md:hidden border-t border-[#1e1e1e] bg-[#171717]">
            <div class="px-4 pt-2 pb-4 space-y-1">
                <a href="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1e1e1e]">Home</a>
                <a href="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1e1e1e]">Features</a>
                <a href="/pricing" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1e1e1e]">Pricing</a>
                <a href="/contact-us" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1e1e1e]">Contact</a>
                <a href="https://app.sadapos.com" onclick="return gtag_report_conversion('https://app.sadapos.com');" class="block mt-4 text-center bg-[#3ecf8e] text-[#121212] px-4 py-2 rounded-md text-base font-bold">Go to App</a>
            </div>
        </div>
    </header>
`;

document.getElementById('header-placeholder').innerHTML = headerHTML;

// Mobile Menu ko chalanay ka code bhi yahi rakh diya hai
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}