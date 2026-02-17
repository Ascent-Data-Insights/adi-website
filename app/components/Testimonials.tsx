const testimonials = [
  {
    quote:
      "Ascent took ownership of critical infrastructure work, including standing up and shaping our Elasticsearch foundation. That freed our team to stay focused on core product and design decisions. They operated independently, moved quickly, and gave us confidence that the technical base was being built the right way.",
    author: 'Tim Reddick',
    title: 'Co-Founder',
    company: 'Lucho',
  },
  {
    quote:
      "I've worked with Parker and Aaron deploying mission-critical AI across a $140B retailer. They're uniquely qualified to build and scale high-volume AI solutions that deliver material enterprise value.",
    author: 'Todd James',
    title: 'Founder',
    company: 'Aurora Insights LLC',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-brand-primary mb-4">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-brand-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-gray-700 text-lg mb-6 italic">{testimonial.quote}</p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-brand-primary">{testimonial.author}</p>
                <p className="text-sm text-gray-600">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
