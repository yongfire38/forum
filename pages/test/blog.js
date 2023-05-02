import Link from "next/link"

export default function Blog({posts}) {
    console.log(posts);
  return (
    <>
      <h2>The Blog</h2>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <h3>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p>{post.content}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export const getServerSideProps = async () => {
    try {
        const res = await fetch("https://learnwebcode.github.io/json-example/posts.json");

        if (res.status === 200) {
            const data = await res.json();
            return { props: { posts: data.posts }}           
        }

        return { props: {} };
    } catch (error) {
        console.log(error);
        return { props: {} }
    }
}