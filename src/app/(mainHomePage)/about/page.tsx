import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] bg-gray-700">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://demo08.houzez.co/wp-content/uploads/2020/03/15.jpg"
            alt="Living room interior"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">About Houzez</h1>
          <p className="text-lg md:text-xl">A Real Estate Theme You Can Trust</p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Your Vision Unrestricted</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              Houzez is a premium WordPress theme for real estate agents and agencies. Houzez comes complete with
              everything youll need to create and manage real estate site of any size without writing a single line of
              code or compromising your ability to customize the design.
            </p>
            <p className="text-gray-600">
              Whether you are a real estate agent looking to build a website for your company or a web developer seeking
              perfect WordPress theme for your next project, you are certain to appreciate the numerous features and
              attention to detail that Houzez provides.
            </p>
          </div>
          <div>
            <p className="text-gray-600 mb-4">
              Houzez is about WordPress theme property management system which allows you to own and maintain your real
              estate marketplace, coordinate your agents, accept submissions and offer membership packages.
            </p>
            <p className="text-gray-600 mb-4">
              Unlike many other real estate themes that confine you to a handful of predefined layouts,{" "}
              <strong>Houzez offers a limitless array of possibilities to structure and style your content.</strong> It
              offers incredible customization so you may organize your real estate site with ease and manage
              customizations with provided documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
          <p className="text-gray-500 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Katherine Garcia", role: "Founder", image: "/placeholder.svg?height=300&width=250" },
              { name: "Kevin Barry", role: "CEO", image: "/placeholder.svg?height=300&width=250" },
              { name: "Danielle Murray", role: "Manager", image: "/placeholder.svg?height=300&width=250" },
              { name: "Thomas Johnson", role: "Co-Founder", image: "/placeholder.svg?height=300&width=250" },
            ].map((member, index) => (
              <div key={index} className="bg-white overflow-hidden shadow-md rounded-md">
                <div className="relative h-[300px]">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Services</h2>
          <p className="text-gray-500 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Buy or Sell Real Estate", image: "/placeholder.svg?height=200&width=300" },
              { title: "Capture Real Estate Value", image: "/placeholder.svg?height=200&width=300" },
              { title: "Commercial Real Estate", image: "/placeholder.svg?height=200&width=300" },
              { title: "Discover Asset Value", image: "/placeholder.svg?height=200&width=300" },
              { title: "Financial Reporting", image: "/placeholder.svg?height=200&width=300" },
              { title: "Real Estate Development", image: "/placeholder.svg?height=200&width=300" },
              { title: "Residential Real Estate", image: "/placeholder.svg?height=200&width=300" },
              { title: "Valuation Advisory", image: "/placeholder.svg?height=200&width=300" },
            ].map((service, index) => (
              <div key={index} className="relative group overflow-hidden rounded-md shadow-md">
                <div className="relative h-[200px]">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-white text-center font-semibold px-4">{service.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Read From Our Blog</h2>
          <p className="text-gray-500 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Skills That You Can Learn In The Real Estate Market",
                date: "January 10, 2023",
                category: "Real Estate",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Learn The Truth About Real Estate Industry",
                date: "February 15, 2023",
                category: "Real Estate",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "10 Quick Tips About Business Development",
                date: "March 22, 2023",
                category: "Business",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "14 Common Misconceptions About Business Development",
                date: "April 5, 2023",
                category: "Business",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((post, index) => (
              <div key={index} className="bg-white overflow-hidden shadow-md rounded-md">
                <div className="relative h-[200px]">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh.
                  </p>
                  <button className="text-blue-600 text-sm font-medium flex items-center">Continue reading</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Testimonials</h2>
          <p className="text-gray-500 mb-10 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-gray-300 mb-4">❝</div>
              <p className="text-gray-600 mb-6">
                Really great Theme. We can't even begin to describe how we've been loving working with Houzez.
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <p className="font-bold text-gray-800">Ben Wilson</p>
                  <p className="text-gray-500 text-sm">Marketing Manager, Envato</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-gray-300 mb-4">❝</div>
              <p className="text-gray-600 mb-6">
                Great work on your Houzez. I like it more and more each day because it makes my life easier and it's
                profitable.
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <p className="font-bold text-gray-800">Amanda Sandford</p>
                  <p className="text-gray-500 text-sm">Realtor, Examplo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 text-center text-gray-500 text-sm border-t border-gray-200">
        <p>© Houzez - All rights reserved</p>
      </footer>
    </main>
  )
}

