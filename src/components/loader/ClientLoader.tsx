// components/ClientLoader.jsx
"use client";
import { useEffect, useState } from "react";
import SystemLoader from "./SystemLoader";

export default function ClientLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // مثال: 2 ثواني
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return <SystemLoader />;
}
