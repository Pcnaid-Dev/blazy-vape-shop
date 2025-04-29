import type { NextPage } from 'next';
import Head from 'next/head';
import { MapPin, Phone, Clock, Star, Gift, Instagram, Facebook, Twitter, ShieldCheck } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  location: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Alex R.",
    quote: "Incredible selection and the staff are super knowledgeable. Always my go-to spot!",
    location: "Downtown Regular"
  },
  {
    id: 2,
    name: "Samantha B.",
    quote: "Love the vibe here. They have unique pieces you can't find anywhere else. Highly recommend.",
    location: "Weekend Visitor"
  },
  {
    id: 3,
    name: "Mike T.",
    quote: "Friendly service and fair prices. They helped me find exactly what I needed. 5 stars!",
    location: "Local Resident"
  }
];

const SmokeShopLanding: NextPage = () => {
  const shopName = "Blazy Vape Shop";
  const imageUrl = "/images/BlazyVapeShop-Transparent.png";
  const imageAlt = "Blazy Vape Shop Logo";
  const tagline = "Premium Smoking Accessories & Welcoming Vibes";

  return (
    <>
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans antialiased">
      <Head>
        <title>{shopName} - {tagline}</title>
      </Head>

      {/* Header/Nav (Simple) */}
      <header className="bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-400 tracking-tight">{shopName}</h1>
          <a href="https://www.google.com/maps/dir//5815%20South%20Cockrell%20Hill%20Road%20Suite%20#120%20Dallas,%20TX%2075236" className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-5 py-2 rounded-full transition duration-300 text-sm shadow-md">Find Us</a>
        </nav>
      </header>

      <main>
        {/* 1. Hero Section */}
        <section
          className="relative h-[70vh] min-h-[400px] flex items-center justify-center text-center bg-cover bg-center bg-fixed px-4 md:px-8"
          style={{
            backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.6)), url('https://images.unsplash.com/photo-1618021062076-650c6a46a85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')`,
          }}
        >
          <div className="z-10 max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tighter shadow-text-lg">
              {shopName}
            </h2>
            <p className="text-xl md:text-2xl text-amber-300 mb-8 font-medium shadow-text-md">
              {tagline}
            </p>
            <a
              href="#location"
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-10 py-4 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-xl"
            >
              Visit Us Today!
            </a>
          </div>
        </section>

        {/* 2. About Us Section */}
        <section id="about" className="py-20 md:py-28 bg-gray-800">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h3 className="text-4xl font-bold text-amber-400 mb-6 tracking-tight">
              Welcome to Blazy Vape Shop
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Established in 2024, Blazy Vape Shop was born from a passion for
              quality smoking products and a desire to create a welcoming space
              for enthusiasts. We pride ourselves on curating a diverse selection
              of premium tobacco, state-of-the-art vapes, and unique accessories,
              all backed by knowledgeable staff dedicated to exceptional customer
              service. Our mission is simple: provide the best products in a
              comfortable atmosphere where everyone feels welcome.
            </p>
            <div className="flex justify-center space-x-6 text-amber-400">
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-xl shadow-lg w-40">
                <Star size={32} className="mb-2" />
                <span className="font-semibold text-sm">Premium Quality</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-xl shadow-lg w-40">
                <ShieldCheck size={32} className="mb-2" />
                <span className="font-semibold text-sm">Expert Staff</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-700 rounded-xl shadow-lg w-40">
                <Gift size={32} className="mb-2" />
                <span className="font-semibold text-sm">Unique Selection</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Product Showcase */}
        <section id="products" className="py-20 md:py-28 bg-gray-900">
          <div className="container mx-auto px-6">
            <h3 className="text-4xl font-bold text-center text-amber-400 mb-12 tracking-tight">
              Explore Our Range
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Premium Cigars", desc: "Hand-rolled cigars from around the world.", icon: "🚬" },
                { title: "Vapes & E-Liquids", desc: "Latest devices and a wide flavor selection.", icon: "💨" },
                { title: "Vintage Pipes", desc: "Artistic and functional pieces.", icon: "🔥" },
                { title: "Accessories", desc: "Papers, lighters, and more.", icon: "⚙️" },
              ].map((prod, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition duration-300 hover:shadow-amber-500/20"
                >
                  <div className="text-5xl mb-4">{prod.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">{prod.title}</h4>
                  <p className="text-gray-400 text-sm flex-grow">{prod.desc}</p>
                  <p className="text-xs text-amber-500 mt-4 font-mono">
                    Visit in-store for full selection
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Retail Location Details */}
        <section id="location" className="py-20 md:py-28 bg-gray-800">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-amber-400 mb-8 tracking-tight">
                Find Us & Get In Touch
              </h3>
              <div className="space-y-5 text-lg">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-amber-400 mt-1 flex-shrink-0" size={24} />
                  <span>
                    5815 South Cockrell Hill Road Suite #120,
                    <br /> Dallas, TX 75236
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="text-amber-400 flex-shrink-0" size={24} />
                  <span>
                    Mon - Sun: 8 AM - 12 AM
                    <br /> 
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-amber-400 flex-shrink-0" size={24} />
                  <a
                    href="tel:+9728046688"
                    className="hover:text-amber-300 transition duration-200"
                  >
                    (972) 804-6688
                  </a>
                </div>
              </div>
              <button className="mt-10 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-8 py-3 rounded-full text-base transition duration-300 shadow-lg">
                Contact Us Form
              </button>
            </div>
            <div className="h-80 md:h-96 bg-gray-700 rounded-xl shadow-lg flex items-center justify-center border-2 border-dashed border-gray-600">

<div style="text-decoration:none; overflow:hidden;max-width:100%;width:500px;height:500px;"><div id="my-map-display" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=5815+South+Cockrell+Hill+Road+suite+120,+Dallas,+TX+75236,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="google-map-html" rel="nofollow" href="https://kbj9qpmy.com/hrn" id="get-data-for-map"></a><style>#my-map-display img{max-height:none;max-width:none!important;background:none!important;}</style></div>
              
            </div>
          </div>
        </section>

        {/* 5. Customer Testimonials */}
        <section id="testimonials" className="py-20 md:py-28 bg-gray-900">
          <div className="container mx-auto px-6 max-w-5xl">
            <h3 className="text-4xl font-bold text-center text-amber-400 mb-12 tracking-tight">
              What Our Customers Say
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonialsData.map((t) => (
                <div
                  key={t.id}
                  className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col text-center border border-gray-700"
                >
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4 flex-grow">"{t.quote}"</p>
                  <p className="font-semibold text-white">- {t.name}</p>
                  <p className="text-sm text-amber-400">{t.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Promotions Section */}
        <section id="promotions" className="py-20 md:py-28 bg-amber-600 text-gray-900">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <Gift size={48} className="mx-auto mb-4 text-gray-900" />
            <h3 className="text-4xl font-bold mb-6 tracking-tight">Loyalty & Deals</h3>
            <p className="text-xl mb-8 leading-relaxed font-medium">
              Join our <span className="font-bold">Blazy Rewards</span> program! Earn
              points with every purchase and get exclusive access to mBlazy-only
              discounts and seasonal specials. Ask in-store to sign up today!
            </p>
            <div className="bg-gray-900/20 p-4 rounded-lg inline-block">
              <p className="font-semibold text-white">
                This Week: <span className="text-amber-200">15% OFF All E-Liquids!</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 7. Footer */}
      <footer className="bg-gray-950 py-12">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-amber-400 transition duration-200">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-amber-400 transition duration-200">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-amber-400 transition duration-200">
              <Twitter size={24} />
            </a>
          </div>
          <div className="text-sm space-x-4 mb-4">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#location" className="hover:text-gray-300">
              Contact
            </a>
          </div>
          <p className="text-xs">
            &copy; {new Date().getFullYear()} {shopName}. All Rights Reserved. Please
            smoke responsibly. Must be 21+ to purchase.
          </p>
        </div>
      </footer>
    </div><>
  );
};

export default SmokeShopLanding;
