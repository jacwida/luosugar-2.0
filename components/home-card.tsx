import { BookmarkPlus, MessagesSquare } from "lucide-react";
import Image from "next/image";
import { getPostsMeta } from "@/lib";

const Card = async () => {
  const posts: any = await getPostsMeta();
  const sorted: any[] = posts.sort(
    //@ts-ignore
    (a: string, b: string) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="flex flex-col gap-8 w-full lg:w-8/12">
      {sorted?.map((post: any) => (
        <div className="rounded-xl border-[1px] p-4" key={post.title}>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full"></div>
            <div className="text-slate-700">
              <h3 className="capitalize font-semibold">{post.author}</h3>
              <p className="text-sm text-slate-400">
                {Math.trunc(Math.random() * 6)} hours ago
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-full sm:w-[70%]">
              <h1 className="font-semibold my-3 text-slate-700 text-xl">
                {post.title}
              </h1>
              <div className="w-full py-2 lg:hidden">
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src={post.cover_image}
                    alt="kk"
                    fill
                    className="object-cover object-top rounded-lg"
                  />
                </div>
              </div>
              <p className="text-slate-400">{post.summary}</p>
            </div>
            <div className="w-[30%] hidden lg:block">
              <div className="relative w-full aspect-[3/2]">
                <Image
                  src={post.cover_image}
                  alt="kk"
                  fill
                  className="object-cover object-top rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <div className="flex items-center gap-2 text-slate-400">
              <MessagesSquare className="w-5 h-5" />
              <p className="text-slate-500">Discuss</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-slate-100 px-3 py-1 rounded-full text-slate-500  text-sm  font-medium w-fit border-r-[1px]">
                {post.category}
              </div>
              <div className="h-4 w-px bg-slate-200"></div>

              <BookmarkPlus className="w-5 h-5 text-slate-600 font-thin" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
