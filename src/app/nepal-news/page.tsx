"use client";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";
import Image from "next/image";

type Article = {
  id: string | number;
  country?: string;
  title: string;
  description?: string;
  image_url?: string;
  pubDate?: string;
  link: string;
};

export default function NepalLawNews() {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNews(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error: ", error);
        setLoading(false);
      });
  }, []);

  const nepaliArticles = news.filter(
    (article: Article) =>
      article.country?.toLowerCase() === "np" ||
      article.title.toLowerCase().includes("nepal")
  );
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (nepaliArticles.length === 0) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-50 dark:text-gray-300">
        No Nepal-specific news found.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-4 mt-20">
      {nepaliArticles.map((article) => (
        <div
          key={article.id}
          className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          {article.image_url && (
            <Image
              src={article.image_url}
              alt={article.title}
              width={400}
              height={192}
              className="w-full h-48 object-cover"
              style={{ objectFit: "cover" }}
              unoptimized
            />
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {article.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
              {article.description}
            </p>
            {article.pubDate && (
              <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                Published: {new Date(article.pubDate).toLocaleDateString()}
              </p>
            )}
            <a
              href={article.link}
              target="_blank"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
