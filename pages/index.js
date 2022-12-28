import { Text } from "./posts/[id].js";
import FormattedDate from "components/date";
import Layout from "components/layout";
import { format, differenceInDays } from "date-fns";
import { getDatabase } from "lib/notion";
import Head from "next/head";
import Link from "next/link";
import pluralize from "pluralize";
import utilStyles from "styles/utils.module.css";

export const databaseId = process.env.NOTION_DATABASE_ID;

const startDate = new Date(2022, 11, 28);
const dateOptions = { day: "numeric", month: "short", year: "numeric" };

export default function Home({ posts }) {
  return (
    <Layout isHome>
      <Head>
        <title>Building Blocks</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Hey, I'm <b>Josh</b>. I'm interested in startups, investing, and
          engineering.
        </p>
        <p>
          I plan to explore this and a variety of life topics from first
          principles on this site.
        </p>
        <p>
          It's been{" "}
          <b>
            {pluralize("day", differenceInDays(new Date(), startDate), true)}
          </b>{" "}
          since I started this blog on <b>{format(startDate, "LLL d, yyyy")}</b>
          .
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map((post) => {
            return (
              <li className={utilStyles.listItem} key={post.id}>
                <Link href={`/posts/${post.id}`}>
                  <Text text={post.properties.Name.title} />
                </Link>
                <br />
                {post.last_edited_time && (
                  <small className={utilStyles.lightText}>
                    <FormattedDate dateString={post.last_edited_time} />
                  </small>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
