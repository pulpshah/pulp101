// src/app/[slug].tsx
import { useRouter } from 'next/router';

export default function DynamicPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold">Page: {slug}</h1>
      <p className="mt-4">This is the unique content for the slug: <strong>{slug}</strong>.</p>
    </div>
  );
}
