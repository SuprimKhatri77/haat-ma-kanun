// components/AdvocateProfilesList.tsx
"use client";

import React from "react";

type UserType = {
  name: string;
  image?: string | null;
};

type AdvocateProfileType = {
  id: string;
  user: UserType;
};

type Props = {
  advocateProfiles: AdvocateProfileType[];
  onMessageClick?: (id: string) => void;
};

export default function AdvocateProfilesList({ advocateProfiles, onMessageClick }: Props) {
  return (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {advocateProfiles.map((profile) => (
      <div key={profile.id} className="border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition">
        <svg>
          <image
            href={profile.user.image || "/default-avatar.png"}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
        </svg>
        <h2 className="text-lg font-semibold mb-2">{profile.user.name}</h2>
        <button
          onClick={() => onMessageClick?.(profile.id)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Message
        </button>
      </div>
    ))}
    {advocateProfiles.length === 0 && <p>No advocates found.</p>}
  </div>
  );
}
