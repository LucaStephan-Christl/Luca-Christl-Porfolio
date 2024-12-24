import React from "react";

function Section({
  style,
  children,
  id,
  title,
}: Readonly<{
  style?: string;
  children: React.ReactNode;
  id: string;
  title: string;
}>) {
  return (
    <section id={id} className={`flex flex-col gap-8 ${style}`}>
      <h2 className="text-5xl">{title}</h2>
      {children}
    </section>
  );
}

export default Section;
