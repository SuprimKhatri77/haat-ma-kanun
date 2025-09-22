import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.NEWS_DATA_IO_API_KEY;
  // const res = await fetch(
  //   `https://newsdata.io/api/1/latest?country=np&category=Politics&apikey=pub_a4f20e7a25ca4312a2ef993058876002`
  // );
  const res = await fetch(
    `   https://newsdata.io/api/1/latest?apikey=${apiKey}&q=Nepal%20law&language=en
  `
  );
  const data = await res.json();
  console.log("Data: ", data);

  const articles = data.results.map((article: any) => ({
    id: article.article_id,
    title: article.title,
    description: article.description,
    link: article.link,
    pubDate: article.pubDate,
    image: article.image_url,
    source: article.source_id,
    category: article.category,
  }));

  return NextResponse.json({
    status: data.status,
    totalResults: data.totalResults,
    articles,
  });
}
