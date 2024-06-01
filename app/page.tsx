'use client'
import React from "react"

import { Index } from "@/components/index"
import { Services } from "@/components/index/services"
import { Projects } from "@/components/index/projects"
import { Members } from "@/components/index/members"

export default function IndexPage() {
  return (
    <main>
    <Index></Index>
    <Services></Services>
    <Projects></Projects>
    <Members></Members>
    </main>

  )
}
