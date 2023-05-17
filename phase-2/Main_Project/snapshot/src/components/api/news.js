import { useQuery } from "@tanstack/react-query";
export function getNews() {
  return fetch(
    "https://newsapi.org/v2/everything?q=apple&from=2023-05-15&to=2023-05-15&sortBy=popularity&apiKey=dc44fa8d033c48fc9ecc9e22e42aff34"
  )
    .then((res) => res.json())
    .then((data) => data);
}

export const Output = () => useQuery({
  queryKey: ['news'],
  queryFn: getNews,
  
})