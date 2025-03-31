import React from "react";

interface BlogComponentProps {
  api: {
    data: [
      {
        id: number;
        title: string;
        content: string;
      }
    ];
  };
}

const BlogComponent: React.FC<BlogComponentProps> = ({ api }) => {
  return (
    <section className="w-full h-svh pt-2 pb-24 md:pb-32 relative overflow-hidden">
      <main className="grid grid-cols-2 md:grid-cols-4">
        <header className="col-span-2">
          <h1 className="uppercase text-6xl md:text-9xl new-font">Blog</h1>
          <p className="text-xs md:text-xl">
            Blog ini berisi beberapa topik seperti cerita pengalaman, tentang
            fianity, review buku, dan lain sebagainya.
          </p>
        </header>
        <span></span>
        <main className="text-end">
          <h2 className="text-sm uppercase md:text-3xl">Total</h2>
          <p className="text-xl md:text-9xl new-font">{api.data.length}</p>
        </main>
      </main>
      <main className="w-full">
        {api?.data?.length > 0 ? (
          api.data.map((blog) => (
            <article className="w-full flex justify-between" key={blog.id}>
              <h2 className="text-3xl uppercase">{blog.title}</h2>
              <p>{blog?.content?.length > 25 ? (`${blog.content.slice(0, 25)}...`) : blog.content}</p>
            </article>
          ))
        ) : (
          <p>Belum ada data</p>
        )}
      </main>
    </section>
  );
};

export default BlogComponent;
