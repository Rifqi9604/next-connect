import React from "react";
import NotFound from "./not-found";

interface UrlUsernameParams {
  params: {
    username: string;
  };
}

async function getDevByUsername(username: string) {
  const res = await fetch(`http://localhost:3000/api/developers/${username}`);
  const { data } = await res.json();
  return data;
}

export default async function page({ params }: UrlUsernameParams) {
  const devData = await getDevByUsername(params.username); //rifqi => error (undefined) karena tidak ada data dengan username rifqi

  if (!devData) {
    return <NotFound />;
  }

  return (
    <div className={`border rounded-lg p-6 shadow-sm`}>
      <div className="flex items-center gap-4 mb-4">
        {/* Placeholder Avatar */}
        <div className="w-12 h-12 rounded-full bg-gray-200"></div>
        <div>
          <h3 className="font-semibold">{devData.name}</h3>
          <p className="text-sm text-gray-500">{devData.role}</p>
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-3">{devData.bio}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {devData.skills.slice(0, 3).map((skill: string) => (
          <span
            key={skill}
            className="inline-block px-2 py-1 text-xs bg-gray-100 rounded-full"
          >
            {skill}
          </span>
        ))}
        {devData.skills.length > 3 && (
          <span className="inline-block px-2 py-1 text-xs bg-gray-100 rounded-full">
            +{devData.skills.length - 3} more
          </span>
        )}
      </div>
    </div>
  );
}
