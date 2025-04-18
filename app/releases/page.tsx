import React from "react";

const Releases = () => {
  return (
    <div className="w-full flex justify-center pt-5">
      <div className="w-[60%]">
        <h1 className="text-[32px]">Release notes</h1>
        <div className="flex flex-col gap-5 mt-4">
          <div className="flex flex-col gap-5 mt-4">
            <div className="space-y-6">
              {[
                {
                  date: "Apr 10, 2025",
                  version: "v1.0.0",
                  notes:
                    "First release for Hashnote.",
                },
              ].map(({ date, version, notes }) => (
                <div key={version} className="flex gap-10 items-start">
                  <span className="w-1/5 text-sm text-muted-foreground">
                    {date}
                  </span>
                  <span className="w-[70px] font-mono text-sm">{version}</span>
                  <p className="text-sm">{notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Releases;
