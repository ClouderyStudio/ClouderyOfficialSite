'use client'
import Link from "next/link"
import React from "react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { TypeAnimation } from "react-type-animation"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Icons } from "@/components/icons"
import { BusIcon } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

export default function IndexPage() {
  let delay = 0;
  const getDelay = () => (delay +=200);
  const members = [
    {
      'name': '云竹',
      'job': '创始人',
      'QQ': '2457483710',
      'desc': '你好，这里是 YZ ，24岁，是学生，对有趣的世界和可能有趣的你感到好奇，热爱Tech和ACG文化，正在尝试从事互联网产品/Web开发相关工作。'
    },
    {
      'name': 'MagicQiyi',
      'job': '创始人',
      'QQ': '2675256772',
      'desc': '我是柒屹，同时也是云术工作室重要成员之一，屹立不倒。从事互联网事业及Web开发工作，也在搞关于Java的一些东西'
    },
  ]
  return (
    <main>
      <section className="container grid items-center gap-5 pb-7 pt-4 md:py-10">
      <div className="items-end gap-5">
        <h1 className={cn("text-center text-3xl leading-tight tracking-widest subpixel-antialiased md:text-4xl","animate-fade-down animate-ease-in-out")} style={{ animationDelay: `${getDelay()}ms` }}>
          一艘穿梭在茫茫互联网之海中的小船 <br></br>
          <strong><TypeAnimation
          className={cn('underline-offset-5 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-5xl font-black tracking-widest underline decoration-blue-500 decoration-wavy subpixel-antialiased md:text-8xl ', 'animate-fade-down animate-ease-in-out')} style={{
            WebkitTextFillColor: 'transparent',
            animationDelay: `${getDelay()}ms`
          }}
          sequence={[
            500,
            '云术工作室',
            1200,
            '<Cloudery />',
            1000,
          ]}
          cursor={true}
          speed={10}
          repeat={Infinity}
        /></strong>
        </h1>
        <p className="animate-fade-down text-center text-lg text-muted-foreground animate-ease-in-out" style={{ animationDelay: `${getDelay()}ms` }}>
          <br/>
          此网站基于 <strong>Next.js + React + Tailwind CSS + TypeScript + Shadcn/ui</strong> 开发
        </p>
      </div>
      <div className="flex animate-fade-down flex-col items-start gap-4 animate-ease-in-out" style={{ animationDelay: `${getDelay()}ms` }}>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          介绍
        </h1>
        <p className="max-w-[500px] text-lg text-muted-foreground">
        云术工作室是由云竹和MagicQiyi开创的前后端开发以及游戏服务团队，旗下产品涉及多个领域。
        </p>
      </div>
      <div className="flex animate-fade-down flex-col items-end gap-4 text-right animate-ease-in-out" style={{ animationDelay: `${getDelay()}ms` }}>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          关于这里
        </h1>
        <p className="max-w-[500px] text-lg text-muted-foreground">
        这是我们的官网。你知道吗？这里之前是使用PHP模板制作的，但是由于性能以及兼容问题而被弃用，故此现用高效的node重置。
        </p>
      </div>
      <Alert className="animate-fade-down animate-ease-in-out" style={{ animationDelay: `${getDelay()}ms` }}><BusIcon></BusIcon>
        <AlertTitle>你好</AlertTitle>
        <AlertDescription>
          此网站还在持续优化中，出现bug请前往Github反馈!
        </AlertDescription>
      </Alert>
    </section>
    <section className="container grid items-center gap-5 pb-7 pt-4 md:py-10">
      <h1 className={cn("text-center text-3xl leading-tight tracking-widest subpixel-antialiased md:text-4xl","animate-fade-down animate-ease-in-out")} style={{ animationDelay: `${getDelay()}ms` }}>
          团队的成员们
          <p className="text-lg text-muted-foreground">一群热血的少年和芬芳的少女</p>
          </h1>
      <div className="grid grid-cols-4 gap-5">
          {members.map((member) => (
            <Card className="animate-fade-left animate-ease-in-out rounded-2xl" style={{ animationDelay: `${getDelay()}ms` }}>
              <CardTitle className="text-center text-2xl"><br></br>
                {member.name}</CardTitle>
                <CardDescription className="text-center">{member.job}</CardDescription>
                <br></br>
              <CardContent>{member.desc}</CardContent>
            </Card>
          ))}
      </div>

    </section>
    </main>

  )
}
