"use client"
import { cn } from "@/lib/utils"
import { Card, CardTitle, CardContent } from "../ui/card"

const serves = [
  {
    name: '前端服务',
    content: '云术工作室致力于为广大用户提供一站式的互联网服务，其中包括免费域名、强大的CDN（如Cloudflare，简称CF）服务，以及高性能的虚拟主机网站服务。'
  },
  {
    name: '游戏服务',
    content: '云术工作室旗下的服务器以其卓越的性能和稳定性，为广大用户提供了流畅、有趣且充满互动性的多人游玩体验。'
  },
  {
    name: '开源项目',
    content: '云术工作室秉持着开放与共享的理念，将我们的所有项目均已开源并发布在Github上。我们深信开源能够促进技术的交流与进步，因此，我们诚挚地邀请所有人来查看、学习、借鉴我们的项目。'
  },
  {
    name: '其它服务',
    content: '除了上述已经描述的开源项目和服务内容，云术工作室致力于提供更为广泛和专业的服务，涵盖多个领域。我们拥有一支经验丰富、技术精湛的团队，能够为客户量身定制解决方案，满足各种复杂需求。'
  }
]

export const Services = async () => {
  let delay = 0;
  const getDelay = () => (delay+=200);
  return (
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
  )
}
