import { getPostsMeta } from "@/lib";
import { MessagesSquare } from "lucide-react";

const Trending = async () => {
  const posts: any = await getPostsMeta();
  const trending: any = posts.slice(-6);
  return (
    <div className=" border-[1px] rounded-xl h-fit  w-full p-4 py-6">
      <h1 className="font-semibold text-slate-600 text-xl">Trending Posts</h1>

      <div>
        {trending.map((post: any) => (
          <div key={post.title} className="my-6">
            <h2 className="text-slate-600 font-semibold text-lg">
              {post.title}
            </h2>
            <div className="flex justify-between items-center">
              <p className="text-slate-400 capitalize">{post.author}</p>
              <div className="flex items-center gap-2 text-slate-400">
                <MessagesSquare className="w-4 h-4" />
                <p className="text-slate-500">Discuss</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
