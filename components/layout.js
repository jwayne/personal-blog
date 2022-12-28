import utilStyles from "../styles/utils.module.css";
import styles from "./layout.module.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Josh Chen";
export const siteTitle = "Building Blocks";

export default function Layout({ children, isHome }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Josh's personal site." />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerBar}>
          <div className={styles.headerBarLeft}>
            <Link href="/">Home</Link>
            <Link href="/">Blog</Link>
            <Link href="https://frogger.joshchen.co/">Frogger</Link>
          </div>
          {/* <div className={styles.headerBarRight}>
            <Link href="https://twitter.com/jwaynechen">
              <Image
                src="/images/twitter.png"
                height={28}
                width={28}
                alt="Twitter"
              />
            </Link>
          </div> */}
        </div>

        {isHome ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>

      {!isHome && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
