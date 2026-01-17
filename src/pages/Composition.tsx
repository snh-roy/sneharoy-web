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
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-6xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-typewriter uppercase tracking-wider mb-6 sm:mb-8">
          Blogs
        </h1>

        <div className="space-y-4 sm:space-y-6 ml-0 sm:ml-8 md:ml-16">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="activity-card group cursor-pointer block"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <h2 className="font-typewriter text-xl sm:text-2xl lg:text-3xl mb-2 group-hover:underline underline-offset-4 break-words">
                    {article.title}
                  </h2>
                  <p className="font-mono text-lg sm:text-xl lg:text-2xl text-foreground/70 leading-relaxed break-words">
                    {article.description}
                  </p>
                </div>
                <span className="font-mono text-lg sm:text-xl lg:text-2xl text-muted-foreground shrink-0 self-start">
                  {article.date}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default Composition;
