import Image from "next/image";
import { all_blogs } from "@/data/blog-data";
import BreadcrumbFour from "@/components/breadcrumb/breadcrumb-four";
import big_img from '@/assets/img/blog/blog-details/bg.jpg';
import BlogDetailsArea from "@/components/blog/details/blog-details-area";
import RelatedBlogs from "@/components/blog/details/related-blogs";

type IParams = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: IParams}) {
  const {id} = await params;
  const blog = all_blogs.find((item) => item.id == Number(id));
  return {
    title: blog?.title ? blog.title : "Blog Details",
  };
}


export default async function BlogDetailsPage({params}: {params: IParams}) {
  const { id } = await params;
  const blog = all_blogs.find((blog) => blog.id.toString() === id);
  return (
    <main>
      {blog ? (
        <>
          {/* breadcrumb area start */}
          <BreadcrumbFour
            title={blog.title}
          />
          {/* breadcrumb area end */}

          {/* postbox big img area start */}
          <div className="tp-postbox-big-thumb jarallax fix p-relative">
            <Image className="w-100" width={1800} height={1012} src={blog.imgSrc} alt="thumb" />
         </div>
          {/* postbox big img area end */}

          {/* blog details area start */}
          <BlogDetailsArea blog={blog} />
          {/* blog details area end */}

          {/* related blogs area start */}
          <RelatedBlogs/>
          {/* related blogs area end */}
        </>
      ) : (
        <div className="text-center mt-100 mb-80">
          No blog found with id: {id}
        </div>
      )}
    </main>
  );
}
