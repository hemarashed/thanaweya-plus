import Link from "next/link";
import { lessons } from "../../chemistry";




export const metadata = {
  title: "ثانوية بلس - الكيمياء",
  description: "منصة تعليمية تفاعلية لطلاب الثانوية العامة في مصر",
};


export default function Home() {
  return (
    <div
      className="min-h-screen p-10 bg-[#0f0f0f] text-white"
      style={{ fontFamily: "sans-serif" }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center">ثانوية بلس - الكيمياء</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {lessons.map((lesson) => (
          <Link key={lesson.id} href={`/chemistry/${lesson.id}`}>
            <div className="border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer bg-[#1a1a1a]">
              
              <img
                src={lesson.thumbnail}
                alt={lesson.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-4">
                <h2 className="font-bold text-lg">{lesson.title}</h2>
              </div>

            </div>
          </Link>
        ))}

      </div>
      <Link
        href="/"
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ff4500",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}