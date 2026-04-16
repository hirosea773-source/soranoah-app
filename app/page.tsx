import { supabase } from "@/lib/supabase/client";

export default async function Home() {
  const { data, error } = await supabase.from("test").select("*");

  console.log("data:", data);
  console.log("error:", error);

  return (
    <div>
      <h1>Supabase接続テスト</h1>
    </div>
  );
}
