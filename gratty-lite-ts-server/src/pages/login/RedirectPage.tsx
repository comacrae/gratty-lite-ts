import { Redirect, useSearch } from "wouter";

export default function RedirectPage() {
  const params: URLSearchParams = new URLSearchParams(useSearch());
  const redirectTo: string | null = params.get("from");
  return <Redirect to={!!redirectTo ? redirectTo : "/home"} />;
}
