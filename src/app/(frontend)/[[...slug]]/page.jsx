import Home from "@/app/Components/Home";
import { client } from "@/sanity/lib/client";

async function page({ params }) {
  let slug = (await params).slug;
  slug = slug ? slug[0] : "/";

  const query = `*[_type == "page" && slug == $slug][0]{
  pageBuilder,
    title,
    slug
}`;

  const data = await client.fetch(query, { slug,cache: 'no-store' });
  console.log(data);
  if(data && data.pageBuilder){

    return <Home data={data?.pageBuilder} />;
  }else{
return <h1>404 not found</h1>
  }
}

export default page;
