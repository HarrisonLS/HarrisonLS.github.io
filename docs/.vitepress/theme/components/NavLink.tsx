import React, { useMemo } from "react";
import { withBase } from "vitepress";
// import { slugify } from "@mdit-vue/shared";
import { NavLinkProps } from "../types";
// import Badge from "./Badge";

type Props = {
  noIcon?: boolean;
  icon?: NavLinkProps["icon"];
  badge?: NavLinkProps["badge"];
  title?: NavLinkProps["title"];
  desc?: NavLinkProps["desc"];
  link: NavLinkProps["link"];
};

const NavLink = (props: Props) => {
  const { noIcon, icon, badge, title, desc, link } = props;

  // const formatTitle = useMemo(() => {
  //   if (!title) {
  //     return "";
  //   }
  //   // return slugify(title);
  //   return title;
  // }, [title]);

  // const svg = useMemo(() => {
  //   if (typeof icon === "object") return icon.svg;
  //   return "";
  // }, [icon]);
  const svg: any = null;
  if (typeof icon === "object") return icon.svg;

  //   const formatBadge = useMemo(() => {
  //     if (typeof badge === "string") {
  //       return { text: badge, type: "info" };
  //     }
  //     return badge;
  //   }, [badge]);

  return (
    <>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          <article>
            <div>
              {!noIcon && (
                <>
                  {" "}
                  {svg && <div dangerouslySetInnerHTML={{ __html: svg }} />}
                  {icon && typeof icon === "string" && (
                    <div>
                      <img
                        src={withBase(icon)}
                        alt={title}
                        onError={(e) => {
                          // e.currentTarget.parentElement?.style.display = "none";
                        }}
                      />
                    </div>
                  )}{" "}
                </>
              )}
              {title && <h5 id={title}> {title}</h5>}{" "}
            </div>{" "}
            {/* {formatBadge && (
              <Badge
                className="badge"
                type={formatBadge.type}
                text={formatBadge.text}
              />
            )}{" "} */}
            {desc && <p>{desc}</p>}{" "}
          </article>{" "}
        </a>
      )}{" "}
    </>
  );
};

export default NavLink;
