import TableTexture from "@/components/utils/TableTexture"
import BlogComponent from "./BlogComponent"

const Page = async() => {
    const response = await fetch('http://localhost:3000/api/blog')
    const result = await response.json()

    return (
        <div className="relative overflow-hidden border-x-1 border-foreground/10">
            <TableTexture />
            <BlogComponent api={result} />
        </div>
    )
}

export default Page;