"use client";

import Content from "../pages/home/components/TestLayout";

export default function Home() {
  return <Content />;
}
// const { data } = useSWR(
//   `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/me`,
//   fetcher
// );

// if (data) {
//   return (
//     // <div>
//     //   <Topbar />
//     //   <Sidebar />
//     //   <ListContainer items={listItems} />
//     // </div>
//     <TestLayout />
//   );
// } else {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       Please login
//     </main>
//   );
// }
