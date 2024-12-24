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
    <section
      id={id}
      className={`flex flex-col gap-8 intersect:motion-preset-focus-lg intersect:motion-preset-slide-down-right-sm motion-duration-[1s] ${className}`}
    >
      {title ? <h2 className="text-5xl">{title}</h2> : null}
      {children}
    </section>
  );
}

export default Section;
