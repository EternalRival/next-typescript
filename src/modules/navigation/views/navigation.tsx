import Link from "next/link";

// type NavigationProps = {};

const Navigation = (/* {}: NavigationProps */) => {
  const routes = [
    ["/", "Home"],
    ["/protected", "Protected"],
    ["/unprotected", "Unprotected"],
  ] as const;

  return (
    <div className="flex gap-2">
      {routes.map(([href, text]) => (
        <Link key={`${href}-${text}`} href={href} className="p-2 border hover:bg-slate-200">
          {text}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
