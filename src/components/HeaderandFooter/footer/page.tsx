import Link from "next/link";
export default function Footer() {
  const menuLabels = [
    { label: "HomePage", href: "/HomePage" },
    { label: "About Us", href: "/AboutUsPage" },
    { label: "Products / Services", href: "/ProductsPage" },
    { label: "Teams", href: "/AboutUsPage/Team" },
    { label: "Blog List", href: "/BlogListPage" },
    { label: "Login", href: "/LoginPage" },
    { label: "Logout", href: "/LogOutPage" },
  ];

  return (
    <>
      <div className="flex justify-center bg-black py-3 w-full">
        {menuLabels.map((key, index) => (
          <Link key={index} href={key.href}>
            <div
              key={index}
              className="flex flex-col items-center text-gray-400 w-full text-xs lg:text-2xl
             hover:text-cyan-400 cursor-pointer px-5 lg:px-20"
            >
              <p>{key.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
