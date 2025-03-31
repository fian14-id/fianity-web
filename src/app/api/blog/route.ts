import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        title: "Apa itu Fianity?",
        keyword: "fianity, Fianity, coding, technology, mochamad allifian arrasyid",
        content: `Lorem Ipsum dolor sit amet./n/nThis example of content, you can see this.`,
        author: "Allifian"
    },
    {
        id: 2,
        title: "Kenapa kita harus peduli dengan politik?",
        keyword: "fianity, politik, ruu, technology, mochamad allifian arrasyid",
        content: `Lorem Ipsum dolor sit amet./n/nThis example of content, you can see this.`,
        author: "Allifian"
    },
]

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);
    const id = searchParams.get("id")
    if (id) {
        const blog = data.find((item) => item.id === Number(id))
        if (!blog) {
            return NextResponse.json({status: 404, message: "data not found" })
        }
        return NextResponse.json({status: 200, message: "success", data: blog })
    }
    return NextResponse.json({status: 200, message: "success", data })
}