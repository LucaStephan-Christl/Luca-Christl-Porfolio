import React from "react";

function Section({
  children,
  id,
  title,
}: Readonly<{
  children: React.ReactNode;
  id: string;
  title: string;
}>) {
  return (
    <section id={id} className="flex flex-col gap-8">
      <h2 className="text-5xl">{title}</h2>
      {children}
    </section>
  );
}

export default Section;
