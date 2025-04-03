import TableTexture from "@/components/utils/TableTexture"
// import BlogComponent from "./BlogComponent"

const Page = async() => {
    // const response = await fetch('https://localhost:3000/api/blog')
    // const result = await response.json()

    return (
        <div className="relative overflow-hidden border-x-1 border-foreground/10">
            <TableTexture />
            {/* <BlogComponent api={result} /> */}
            <h1 className="font-bold uppercase text-sm">Masih Tahap Development</h1>
        </div>
    )
}

export default Page;