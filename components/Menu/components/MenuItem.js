import { useMenu } from "@helpers";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./MenuItem.module.css";

const MenuItem = ({ children, href, withSeparator }) => {
  const { openMenu, closeMenu } = useMenu();
  const { pathname } = useRouter();

  if (pathname === href) {
    return (
      <li className="my-4">
        <div className="relative">
          <div className={styles.dot} />
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
