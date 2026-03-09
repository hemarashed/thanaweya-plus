import Link from "next/link";
import { lessons } from "../../../french";
import NotFound from "../../not-found";

export default async function LessonPage({ params }) {
  // فك الـ Promise
  const { id } = await params;

  const lesson = lessons.find((l) => l.id === id);

  if (!lesson) {
    return <NotFound />;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#0f0f0f",
        color: "#fff",
      }}
    >
      <h1
        style={{
          marginBottom: "40px",
          fontSize: "2rem",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        {lesson.title}
      </h1>
{/*       
      <img
        src={lesson.thumbnail}
        alt={lesson.title}
        style={{
          width: "800px",
          maxWidth: "100%",
          height: "450px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "30px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
        }}
      /> */}

      <iframe
        width="800"
        height="450"
        style={{
          maxWidth: "100%",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.7)",
        }}
        src={`https://www.youtube.com/embed/${lesson.youtubeId}`}
        title={lesson.title}
        allowFullScreen
      />

      <Link
        href="/"
        style={{
          marginTop: "30px",
          padding: "10px 20px",
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

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lesson = lessons.find((l) => l.id === resolvedParams.id);

  return {
    title: lesson
      ? `${lesson.title} - ثانوية بلس`
      : "درس غير موجود - ثانوية بلس",
    description: "منصة تعليمية تفاعلية لطلاب الثانوية العامة في مصر",
  };
}
