import { useQuery } from "@tanstack/react-query";
export function getPosts() {
  return fetch(
    "https://my-json-server.typicode.com/jima-J9M1/dataProvider/locations"
  )
    .then((res) => res.json())
    .then((data) => data);
}

export const Result = () => useQuery({
  queryKey: ['posts'],
  queryFn: getPosts,
})