import { Developer } from "@/app/data";
import Link from "next/link";
import React from "react";

interface ProfileCardProps {
  developer: Developer;
}

export default function ProfileCard({ developer }: ProfileCardProps) {
  return (
    <div className={`border rounded-lg p-6 shadow-sm`}>
      <div className="flex items-center gap-4 mb-4">
        {/* Placeholder Avatar */}
        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
        <div>
          <h3 className="font-semibold">{developer.name}</h3>
          <p className="text-sm text-gray-500">{developer.role}</p>
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-3">{developer.bio}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {developer.skills.slice(0, 3).map((skill: string) => (
          <span
            key={skill}
            className="inline-block px-2 py-1 text-xs bg-gray-100 rounded-full"
          >
            {skill}
          </span>
        ))}
        {developer.skills.length > 3 && (
          <span className="inline-block px-2 py-1 text-xs bg-gray-100 rounded-full">
            +{developer.skills.length - 3} more
          </span>
        )}
      </div>

      <Link
        href={`/profiles/${developer.username}`}
        className="inline-flex items-center text-sm font-medium text-primary"
      >
        View Profile
      </Link>
    </div>
  );
}
