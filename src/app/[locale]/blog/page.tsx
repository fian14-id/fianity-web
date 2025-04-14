import TableTexture from "@/components/utils/TableTexture";
// import BlogComponent from "./BlogComponent"

const Page = async () => {
  // const response = await fetch('https://localhost:3000/api/blog')
  // const result = await response.json()

  return (
    <div className="relative overflow-hidden border-x-1 border-foreground/10">
      <TableTexture />
      {/* <BlogComponent api={result} /> */}
      <main className="flex justify-center items-center h-screen">
        <h1 className="new-font uppercase text-3xl">Masih Tahap Development</h1>
      </main>
    </div>
  );
};

export default Page;
