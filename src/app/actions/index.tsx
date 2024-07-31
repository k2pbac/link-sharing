"use server";

import { redirect } from "next/navigation";

export async function checkLogged(id: string) {
  try {
    if (localStorage.getItem("id")) redirect(`/`); // Navigate to the links page
  } catch (error) {
    redirect(`/login`); // Navigate to the links page
  }
}
