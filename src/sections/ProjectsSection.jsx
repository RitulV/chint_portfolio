function ProjectsSection() {
  const projects = [
    {
      title: "Data Visualization Dashboard",
      description:
        "A customizable analytics dashboard for large enterprise users.",
    },
    {
      title: "Pricing Strategy Playbook",
      description:
        "Developed for optimizing product-market fit and profitability.",
    },
    {
      title: "Hawaii Trip Planner App",
      description: "An itinerary planner built for personal travel needs.",
    },
  ];

  return (
    <section className="py-20 px-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="shadow-lg bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
