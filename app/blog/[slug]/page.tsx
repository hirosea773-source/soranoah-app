import { getPosts, getPostContent } from "@/lib/notion";
import { MDXRemote } from "next-mdx-remote/rsc";

export const revalidate = 60;

// =========================
// SEO
// =========================
export async function generateMetadata({ params }: any) {
  const { slug } = await params; // ★ここが重要

  const posts = await getPosts();

  const post = posts.find((p: any) => {
    const s = p.properties.slug.rich_text[0]?.plain_text;
    return s === slug;
  });

  if (!post) return {};

  const title = post.properties.title.title[0]?.plain_text;
  const content = post.properties.content.rich_text[0]?.plain_text || "";

  return {
    title,
    description: content.slice(0, 100),
  };
}

// =========================
// ページ本体
// =========================
export default async function PostPage({ params }: any) {
  const { slug } = await params; // ★ここも重要

  const posts = await getPosts();

  const post = posts.find((p: any) => {
    const s = p.properties.slug.rich_text[0]?.plain_text;
    return s === slug;
  });

  if (!post) return <div>Not found</div>;

  const title = post.properties.title.title[0]?.plain_text;

  const content = await getPostContent(post.id);

  return (
    <div style={{ padding: "20px" }}>
      <h1>{title}</h1>

      <MDXRemote source={content} />

      <div style={{ marginTop: "40px" }}>
        <hr />
        <p>お問い合わせはこちら</p>
        <a href="/contact">無料相談する</a>
      </div>
    </div>
  );
}
