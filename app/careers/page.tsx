export default function CareersPage() {
    return (
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold">Careers at Onam Veg</h1>
        <p className="mt-4 text-gray-600">
          this is test code 1.
        </p>
  
        <div className="mt-10 space-y-6">
          <JobCard
            title="Kitchen Staff"
            type="Full-time / Part-time"
            desc="Assist with food preparation and kitchen operations."
          />
          <JobCard
            title="Service Staff"
            type="Part-time"
            desc="Customer service, order handling, and front-of-house duties."
          />
          <JobCard
            title="Delivery Partner"
            type="Part-time"
            desc="Deliver food orders safely and on time."
          />
        </div>
  
        <div className="mt-12 rounded-xl border p-6">
          <h2 className="font-semibold text-lg">How to Apply</h2>
          <p className="mt-2 text-gray-600">
            Call or WhatsApp us with your details and the role you’re applying for.
          </p>
  
          <p className="mt-4 text-sm text-gray-700">
            📞 +91 XXXXX XXXXX <br />
            💬 WhatsApp preferred
          </p>
        </div>
      </main>
    );
  }
  
  function JobCard({
    title,
    type,
    desc,
  }: {
    title: string;
    type: string;
    desc: string;
  }) {
    return (
      <div className="rounded-xl border p-5">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-[#2f7d32] mt-1">{type}</p>
        <p className="mt-2 text-sm text-gray-600">{desc}</p>
      </div>
    );
  }
  