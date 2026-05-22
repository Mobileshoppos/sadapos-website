const footerHTML = `
    <footer class="bg-[#121212] border-t border-[#1e1e1e] pt-20 pb-10 relative z-10">
        <div class="container mx-auto px-4 text-center">
            
            <!-- Social Media Icons (Ab 4 icons hain) -->
            <div class="flex justify-center gap-6 mb-10">
                <a href="#" class="text-gray-500 hover:text-white transition-colors"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg></a>
                <a href="#" class="text-gray-500 hover:text-white transition-colors"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/></svg></a>
                <a href="#" class="text-gray-500 hover:text-white transition-colors"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/></svg></a>
                <a href="#" class="text-gray-500 hover:text-white transition-colors"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
            </div>

            <!-- Description -->
            <p class="text-gray-500 text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
                The all-in-one POS system. Precision inventory, automated financials, and global sync technology designed for all type of retailers and wholesale businesses of all sizes.
            </p>

            <!-- Links Grid -->
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12 text-sm">
                <a href="privacy-policy.html" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="terms-of-service.html" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="refunds-policy.html" class="text-gray-400 hover:text-white transition-colors">Refunds Policy</a>
                <a href="contact-us.html" class="text-gray-400 hover:text-white transition-colors">Contact Us</a>
                <a href="pricing.html" class="text-gray-400 hover:text-white transition-colors">Pricing</a>
                <a href="about-us.html" class="text-gray-400 hover:text-white transition-colors">About Us</a>
            </div>

            <!-- Copyright -->
            <div class="text-gray-600 text-xs border-t border-gray-900 pt-8">
                &copy; 2025 - 2026 SadaPOS. All Rights Reserved.
            </div>
        </div>
    </footer>
`;

document.getElementById('footer-placeholder').innerHTML = footerHTML;