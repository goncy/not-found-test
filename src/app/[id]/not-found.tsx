"use client";

import {useParams} from "next/navigation";
import {useEffect, useState} from "react";

import {getMessage} from "./actions";

export default function NotFoundPage() {
  const params = useParams();
  const [message, setMessage] = useState("");

  useEffect(() => {
    getMessage(params.id as string)
      .then(setMessage)
      .finally(console.log); // Adding this line will make it work
  }, [params.id]);

  return <div>{message}</div>;
}
