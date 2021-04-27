import { useMenu } from "@helpers";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./MenuItem.module.css";
import { Flipped } from "react-flip-toolkit";

const MenuItem = ({ children, href, withSeparator }) => {
  const { openMenu, closeMenu } = useMenu();
  const { query, pathname } = useRouter();

  let currentSection = query.redirect || "/" + pathname.split("/")[1];

  if (currentSection === href) {
    return (
      <li className="my-4">
        <div className="relative">
          <Flipped flipId="dot">
            <div className={styles.dot} />
          </Flipped>
          <span className={`${styles.link} text-primary`}>{children}</span>
        </div>
        {withSeparator && <hr className="_separator my-6" aria-hidden />}
      </li>
    );
  }

  return (
    <li
      className="my-4"
      onClick={closeMenu}
      onFocus={openMenu}
      onBlur={closeMenu}
    >
      <Link href={href}>
        <a className={styles.link}>{children}</a>
      </Link>
      {withSeparator && <hr className="_separator my-6" aria-hidden />}
    </li>
  );
};

export default MenuItem;
