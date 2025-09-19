import PostCard from "@/components/qna/PostCard";
import QnaHeader from "@/components/qna/QnaHeader";
import React from "react";

export default function page() {
  return (
    <main className="mt-20">
      <QnaHeader />
      <div className="mt-6">
        <PostCard />
        <PostCard />
      </div>
    </main>
  );
}
