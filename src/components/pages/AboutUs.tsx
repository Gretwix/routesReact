export default function AboutUs(){
    return(
        <section className="text-white min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-bright-sun-500 font-anton text-6xl mb-4">OUR STORY</h1>
          <div className="w-24 h-1 bg-bright-sun-500 mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mission Statement */}
          <div className="space-y-6">
            <h2 className="font-spartwell text-4xl text-bright-sun-500 -rotate-6">Our Mission</h2>
            <p className="font-montserrat text-lg leading-relaxed">
              Since 2015, we've been on a mission to provide athletes and enthusiasts with the finest tennis footwear. 
              Our passion for the sport drives us to curate a collection that combines performance, comfort, and style.
            </p>
          </div>

          {/* Values Section */}
          <div className="bg-zinc-800/50 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="font-anton text-2xl text-bright-sun-500 mb-6">What Sets Us Apart</h3>
            <ul className="space-y-4 font-montserrat">
              <li className="flex items-start gap-3">
                <span className="text-bright-sun-500 text-xl">•</span>
                <p>Expert fitting service with personalized recommendations</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-bright-sun-500 text-xl">•</span>
                <p>Curated selection of premium tennis shoes from top brands</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-bright-sun-500 text-xl">•</span>
                <p>Performance-focused designs for every court surface</p>
              </li>
            </ul>
          </div>

          {/* Quality Promise */}
          <div className="bg-zinc-800/50 p-8 rounded-2xl backdrop-blur-sm md:col-span-2">
            <h3 className="font-anton text-2xl text-bright-sun-500 mb-6">Our Quality Promise</h3>
            <p className="font-montserrat leading-relaxed">
              Every pair of tennis shoes in our collection is carefully selected to meet our stringent 
              standards of durability, comfort, and performance. We understand that the right footwear 
              can make all the difference on the court, which is why we partner with leading manufacturers 
              who share our commitment to excellence.
            </p>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-2 text-center mt-8">
            <h3 className="font-anton text-2xl text-bright-sun-500 mb-4">Visit Our Store</h3>
            <p className="font-montserrat">
              123 Tennis Court Avenue<br />
              Game Set Match, CA 90210<br />
              1-800-TENNIS-1
            </p>
          </div>
        </div>
      </div>
    </section>
    );
}