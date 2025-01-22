import React from "react";

function Section({
  className,
  children,
  id,
  title,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
  id: string;
  title?: string;
}>) {
  return (
    <section id={id} className={`flex flex-col gap-8 ${className}`}>
      {title ? <h2 className="text-5xl">{title}</h2> : null}
      {children}
    </section>
  );
}

export default Section;
