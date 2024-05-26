'use client'
import Link from "next/link"
import React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
    {
      'name': '屑北',
      'job': 'MC服务器指导人',
      'QQ': '3582126020',
      'desc': '',
    },
    {
      'name': '信念',
      'job': '云术生存战争服务器指导人',
      'QQ': '953595252',
      'desc': '',
    },
    {
      'name': '一只小小安',
      'job': 'Idc项目负责人',
      'QQ': '2770161886',
      'desc': '',
    },
    {
      'name': '暂时未知',
      'job': '安卓逆向开发',
      'QQ': '1704853359',
      'desc': '',
    },
    {
      'name': '咕噜',
      'job': '凌御大陆服务器负责人',
      'QQ': '1263115878',
      'desc': '',
    },
    {
      'name': '吴詞',
      'job': 'Idc项目负责人',
      'QQ': '2171587486',
      'desc': '',
    },
    {
      'name': '0',
      'job': '团队管理员',
      'QQ': '3014786442',
      'desc': '',
    },
  ]
  const serves = [
    {
      'name': '前端服务',
      'content': '云术团队可以为您提供免费域名、cdn(CF)、以及虚拟主机网站服务'
    },
    {
      'name': '游戏服务',
      'content': '云术团队旗下的服务器为您提供流畅、有趣的多人游玩体验'
    },
    {
      'name': '开源项目',
      'content': '云术团队的项目均已开源在Github，所有人都可以借鉴我们的项目，但请标明出处'
    },
    {
      'name': '其它服务',
      'content': '除了上述描述的服务内容，我们还可以提供更多的服务，其中涉及到了多个领域，如有需要可自行咨询。'
    }
  ]
  const projects = [
    {
      'cate': 'game',
      'name': '云竹网路MC互通服',
      'image': 'https://api.cloudery.cn/cdn-assets/cloudery/mcyz.jpeg',
      'desc': ''
    },
    {
      'cate': 'game',
      'name': '云术生存战争服务器',
      'image': 'https://api.cloudery.cn/cdn-assets/cloudery/sczz.jpg',
      'desc': ''
    }
  ]
  const selectedcate = 'all';
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
        云术工作室，由云竹与MagicQiyi联手创立，专注于前后端开发以及游戏服务。作为一个多元化的团队，我们旗下产品广泛涉猎多个领域，致力于为客户提供卓越的技术支持与创新的解决方案。通过我们的专业能力和丰富经验，云术工作室正努力成为行业内的佼佼者。
        </p>
      </div>
      <div className="flex animate-fade-down flex-col items-end gap-4 text-right animate-ease-in-out" style={{ animationDelay: `${getDelay()}ms` }}>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          关于这里
        </h1>
        <p className="max-w-[500px] text-lg text-muted-foreground">
        这是我们的官方网站。您可能不知道，之前这个网站是采用PHP模板搭建的，然而，由于性能和兼容性问题，我们决定不再使用它。为了提升用户体验和网站的流畅性，我们现在采用了高效的Node.js技术进行了全新重构。这次的优化和调整将为用户带来更加稳定、快速且兼容性更好的访问体验。
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
          团队服务
          <p className="text-lg text-muted-foreground">我们可以为你带来这些服务</p>
          </h1>
          <div className="grid grid-cols-4 gap-5">
          {serves.map((serve) => (
            <Card className="animate-fade-left rounded-2xl animate-ease-in-out" style={{ animationDelay: `${getDelay()}ms` }}>
              <CardTitle className="text-center text-2xl">
                <br></br>{serve.name}</CardTitle>
                <br></br>
              <CardContent>{serve.content}</CardContent>
            </Card>
          ))}
      </div>
    </section>
    <section className="container grid items-center gap-5 pb-7 pt-4 md:py-10">
      <h1 className={cn("text-center text-3xl leading-tight tracking-widest subpixel-antialiased md:text-4xl","animate-fade-down animate-ease-in-out")} style={{ animationDelay: `${getDelay()}ms` }}>
          我们的项目
          <p className="text-lg text-muted-foreground">这是一些项目</p>
      </h1>
    <div className="grid animate-fade-down grid-cols-4 gap-5 animate-ease-in-out" style={{ animationDelay: `${getDelay()}ms` }}>
            {
              projects.map((project) => (
            <Card className="rounded-2xl">
            <CardTitle className="text-center text-2xl">
              <br></br>
              <Image className="rounded-3xl px-5 blur-sm hover:blur-0" src={ `${project.image}` } alt="" height={ `280` } width={ `680` }></Image><br/>
              {project.name}</CardTitle>
              <br></br>
            <CardContent>{project.desc}</CardContent>
          </Card>
        ))}
    </div>

    </section>
    <section className="container grid items-center gap-5 pb-7 pt-4 md:py-10">
      <h1 className={cn("text-center text-3xl leading-tight tracking-widest subpixel-antialiased md:text-4xl","animate-fade-down animate-ease-in-out")} style={{ animationDelay: `${getDelay()}ms` }}>
          团队的成员们
          <p className="text-lg text-muted-foreground">一群志远的青俊与质雅的淑女</p>
          </h1>
      <div className="grid grid-cols-4 gap-5">
          {members.map((member) => (
            <Card className="animate-fade-left rounded-2xl animate-ease-in-out" style={{ animationDelay: `${getDelay()}ms` }}>
              <CardTitle className="text-center text-2xl"><br></br>
              <Image className="mx-auto rounded-full" src={`https://q1.qlogo.cn/g?b=qq&nk=${member.QQ}&s=640`} alt="" width={'100'} height={'100'}></Image>
                <br></br>{member.name}</CardTitle>
                <CardDescription className="text-center">{member.job} @ {member.QQ}</CardDescription>
                <br></br>
              <CardContent>{member.desc}</CardContent>
            </Card>
          ))}
      </div>

    </section>
    </main>

  )
}
