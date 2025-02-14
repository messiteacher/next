import createClient from "openapi-fetch";
import ClientPage from "./ClientPage";
import { paths } from "@/lib/backend/apiV1/schema";

const client = createClient<paths>({
  baseUrl: "http://localhost:8080",
});
export default async function Page({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const id = await params.id;
  const response = await client.GET("/api/v1/posts/{id}", {
    params: {
      path: {
        id,
      },
    },
  });

  if (response.error) {
    console.log(response);
    return <div>에러가 발생했습니다.</div>;
  }

  const rsData = response.data;
  const post = rsData.data;

  return <ClientPage post={post} />;
}
