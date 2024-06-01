"use client"
import { cn } from "@/lib/utils"
import { Card, CardTitle, CardDescription, CardContent } from "../ui/card"
import Image from "next/image"

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

export const Members = async () => {
  let delay = 0;
  const getDelay = () => (delay+=200);
  return (
    <section className="container grid items-center gap-5 pb-7 pt-4 md:py-10">
    <h1 className={cn("text-center text-3xl leading-tight tracking-widest subpixel-antialiased md:text-4xl","animate-fade-down animate-ease-in-out")} style={{ animationDelay: `${getDelay()}ms` }}>
        团队的成员们
        <p className="text-lg text-muted-foreground">一群志远的青俊与质雅的淑女</p>
        </h1>
    <div className="grid grid-cols-4 gap-5">
        {members.map((member) => (
          <Card className="animate-fade-left rounded-2xl animate-ease-in-out" style={{ animationDelay: `${getDelay()}ms` }}>
            <CardTitle className="text-center text-2xl"><br></br>
            <Image className="mx-auto rounded-full" src={`https://q1.qlogo.cn/g?b=qq&nk=${member.QQ}&s=640`} alt="" width={'100'} height={'100'} />
              <br></br>{member.name}</CardTitle>
              <CardDescription className="text-center">{member.job} @ {member.QQ}</CardDescription>
              <br></br>
            <CardContent>{member.desc}</CardContent>
          </Card>
        ))}
    </div>

  </section>
  )
}
