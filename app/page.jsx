// import Link from "next/link";
// import { lessons } from "../data";

// export default function Home() {
//   return (
//     <div
//       className="min-h-screen p-10 bg-[#0f0f0f] text-white"
//       style={{ fontFamily: "sans-serif" }}
//     >
//       <h1 className="text-4xl font-bold mb-8 text-center">ثانوية بلس - الدروس</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

//         {lessons.map((lesson) => (
//           <Link key={lesson.id} href={`/lesson/${lesson.id}`}>
//             <div className="border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer bg-[#1a1a1a]">
              
//               {/* <img
//                 src={lesson.thumbnail}
//                 alt={lesson.title}
//                 className="w-full h-56 object-cover"
//               /> */}

//               <div className="p-4">
//                 <h2 className="font-bold text-lg">{lesson.title}</h2>
//               </div>

//             </div>
//           </Link>
//         ))}

//       </div>
//     </div>
//   );
// }



import Link from "next/link";

export default function LandingPage() {
  const subjects = [
    { name: "اللغة العربية", href: "/arabic" },
    { name: "اللغة الانجليزية", href: "/english" },
    { name: "اللغة الفرنسية", href: "/french" },
    { name: "الفيزياء", href: "/physics" },
    { name: "الكيمياء", href: "/chemistry" },
    { name: "الاحياء", href: "/biology" },
  ];

  return (
    <div style={{ backgroundColor: "#0f0f0f", color: "#fff", minHeight: "100vh" }}>
      {/* Hero Section */}
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <h1 style={{ fontSize: "5rem", marginBottom: "20px", fontWeight: "700" }}>
          أهلاً بك في ثانوية بلس
        </h1>
        <p style={{ fontSize: "1.5rem", maxWidth: "700px", marginBottom: "40px", lineHeight: "1.6" }}>
          منصة تعليمية تفاعلية تجمع كل دروس الثانوية العامة في مكان واحد، لتسهيل التعلم وتحسين التركيز.
        </p>
        <Link
          href="#subjects"
          style={{
            padding: "15px 30px",
            backgroundColor: "#ff4500",
            color: "#fff",
            borderRadius: "8px",
            fontSize: "1.2rem",
            fontWeight: "600",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
          className="hover:bg-[#e03e00]"
        >
          ابدأ التعلم الآن
        </Link>
      </div>

      {/* Subjects Section */}
      <div id="subjects" style={{ padding: "40px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "30px", textAlign: "center", fontWeight: "700" }}>
          اختر المادة
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
          }}
        >
          {subjects.map((subject) => (
            <Link
              key={subject.href}
              href={subject.href}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",
                backgroundColor: "#1a1a1a",
                borderRadius: "10px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "1.2rem",
                transition: "all 0.3s ease",
              }}
              className="hover:bg-[#ff4500] hover:text-[#0f0f0f]"
            >
              {subject.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
