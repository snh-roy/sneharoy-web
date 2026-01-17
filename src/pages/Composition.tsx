import Layout from "@/components/Layout";

const articles = [
  {
    title: "My first Medium: Me in 10 years",
    date: "Jan 2026",
    description: "When I am 30.",
    url: "https://medium.com/@sneharoy1/my-first-medium-me-in-10-years-918ce7764106",
  },
];

const Composition = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <h1 className="text-3xl font-typewriter uppercase tracking-wider mb-8">
          Blogs
        </h1>

        <div className="space-y-6 ml-8 md:ml-16">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="activity-card group cursor-pointer block"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="font-typewriter text-2xl mb-2 group-hover:underline underline-offset-4">
                    {article.title}
                  </h2>
                  <p className="font-mono text-xl text-foreground/70 leading-relaxed">
                    {article.description}
                  </p>
                </div>
                <span className="font-mono text-xl text-muted-foreground shrink-0">
                  {article.date}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 ml-8 md:ml-16">
          <p className="font-mono text-xl text-muted-foreground italic">
            More writings coming soon...
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Composition;
