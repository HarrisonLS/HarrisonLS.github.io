import React, { useMemo } from "react";
// import { slugify } from "@mdit-vue/shared";
import NavLink from "./NavLink";
import type { NavLinkProps } from "../types";

type Props = { title: string; noIcon?: boolean; items: NavLinkProps[] };

const NavLinks = (props: Props) => {
  const { title, noIcon, items } = props;

  // const formatTitle = useMemo(() => {
  //   // return slugify(title);
  //   return title;
  // }, [title]);

  return (
    <>
      {title && (
        <h2 id={title}>
          {title}
          <a href={`#${title}`} aria-hidden="true" />{" "}
        </h2>
      )}
      <div>
        {items.map((item) => (
          <NavLink key={item.id} noIcon={noIcon} {...item} />
        ))}
        ∏
      </div>
    </>
  );
};

export default NavLinks;
