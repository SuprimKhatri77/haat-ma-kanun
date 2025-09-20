export default function StatsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">Kanun in numbers</h2>
          <p>
            “Haat Ma Kanun is evolving to be more than just a legal Q&A site. It
            connects people, experts, and communities through tools that make
            justice accessible.”
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">+1200</div>
            <p>Legal Experts</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">25K</div>
            <p>Active Users</p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">+500</div>
            <p>Cases Solved</p>
          </div>
        </div>
      </div>
    </section>
  );
}
