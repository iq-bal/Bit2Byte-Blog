"use client";
import React from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { SheetClose } from "../ui/sheet";

const MobileNav = () => {
  const pathname = usePathname();
  const route = pathname.split("/")[1];

  return (
    <div>
      <ul className="flex flex-col w-full  gap-4">
        <SheetClose asChild>
          <SheetClose asChild>
            <Link href={"/"}>
              <p
                className={`hover:bg-znc-300  py-2 px-4 rounded ${
                  route == "" && "bg-znc-200"
                }`}
              >
                Home
              </p>
            </Link>
          </SheetClose>
        </SheetClose>
        <SheetClose asChild>
          <Link href={"/about"}>
            <p
              className={`hover:bg-znc-300  py-2 px-4 rounded ${
                route == "about" && "bg-znc-200"
              }`}
            >
              About
            </p>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href={"/blog"}>
            <p
              className={`hover:bg-znc-300  py-2 px-4 rounded ${
                route == "blog" && "bg-znc-200"
              }`}
            >
              Blog
            </p>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href={"/syllabus"}>
            <p
              className={`hover:bg-znc-300  py-2 px-4 rounded ${
                route == "syllabus" && "bg-znc-200"
              }`}
            >
              Sylabus
            </p>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href={"/contact"}>
            <p
              className={`hover:bg-znc-300  py-2 px-4 rounded ${
                route == "contact" && "bg-znc-200"
              }`}
            >
              Contact
            </p>
          </Link>
        </SheetClose>
        <div className="buttons gap-2 flex flex-col text-xsm w-1/3">
          <SheetClose asChild>
            <Link
              className={buttonVariants({ variant: "secondary" })}
              href="/login"
            >
              Login
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              className={buttonVariants({ variant: "secondary" })}
              href="/login"
            >
              Signup
            </Link>
          </SheetClose>
        </div>
      </ul>
    </div>
  );
};

export default MobileNav;
